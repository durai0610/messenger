import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}
// This is a work-around to avoid creating multiple instances of PrismaClient

const client = globalThis.prisma || new PrismaClient();
if(process.env.NODE_ENV === "production") globalThis.prisma = client;

export default client;