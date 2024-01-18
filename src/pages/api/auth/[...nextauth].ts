import NextAuth, { NextAuthOptions } from "next-auth";
import { NextApiHandler } from "next";
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import bcrypt from "bcrypt";
import { prisma } from "../../../../lib/prisma";

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options: NextAuthOptions = {
    debug: true,
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "john.doe@email.com",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "password",
                },
            },

            authorize: async (credentials) => {
                const email = credentials?.email;
                const password = credentials?.password;

                const dbUser = await prisma.user.findUnique({
                    where: { email: email },
                    select: {
                        email: true,
                        username: true,
                        password: true,
                        name: true,
                        first_name: true,
                        last_name: true,
                    },
                });

                if (!dbUser) {
                    throw new Error(`No user with email ${email}`);
                }

                if (dbUser) {
                    const comparePW = await bcrypt.compare(
                        password || "",
                        dbUser.password || ""
                    );

                    if (comparePW) {
                        return dbUser;
                    } else {
                        console.log(`Incorrect password for ${dbUser.username}`);
                    }
                }

                return null;
            },
        }),
    ],
    pages: {
        signIn: "/auth/signin",
    },

    callbacks: {
        jwt(params) {
            // update token
            if (params.user?.role) {
                params.token.role = params.user.role;
            }
            // return final_token
            return params.token;
        },
    },
    secret: process.env.JWT_SECRET,
};
