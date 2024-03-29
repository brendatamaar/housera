import { auth } from "@auth/lucia";
import { PrismaClient, Prisma } from '@prisma/client';

import type { NextApiRequest, NextApiResponse } from "next";


const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") return res.status(405);
    const { username, password } = req.body as {
        username: unknown;
        password: unknown;
    };
    // basic check
    if (
        typeof username !== "string" ||
        username.length < 1 ||
        username.length > 31
    ) {
        return res.status(400).json({
            error: "Invalid username"
        });
    }
    if (
        typeof password !== "string" ||
        password.length < 1 ||
        password.length > 255
    ) {
        return res.status(400).json({
            error: "Invalid password"
        });
    }
    try {
        const user = await auth.createUser({
            key: {
                providerId: "username", // auth method
                providerUserId: username.toLowerCase(), // unique id when using "username" auth method
                password // hashed by Lucia
            },
            attributes: {
                username
            }
        });
        const session = await auth.createSession({
            userId: user.userId,
            attributes: {}
        });
        const authRequest = auth.handleRequest({
            req,
            res
        });
        authRequest.setSession(session);
        return res.redirect(302, "/"); // profile page
    } catch (e: any) {
        // check for unique constraint error in user table
        if (e instanceof Prisma.PrismaClientKnownRequestError &&
            e.code === 'P2002' &&
            typeof e.meta?.target === 'string' && // Ensure target is a string before using 'includes'
            e.meta.target.includes('unique constraint')) {
            return res.status(400).json({
                error: "Username already taken"
            });
        }

        return res.status(500).json({
            error: "An unknown error occurred"
        });
    }
};

export default handler;