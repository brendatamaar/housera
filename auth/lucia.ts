import { lucia } from "lucia";
import { prisma } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";
import { nextjs_future } from "lucia/middleware";

const client = new PrismaClient();

export const auth = lucia({
    adapter: prisma(client, {
        user: "user", // model User {}
        key: "key", // model Key {}
        session: "session" // model Session {}
    }),
    env: process.env.NODE_ENV === "development" ? "DEV" : "PROD",
    middleware: nextjs_future(),
    getUserAttributes: (data) => {
        return {
            username: data.username
        };
    }
});

export type Auth = typeof auth;