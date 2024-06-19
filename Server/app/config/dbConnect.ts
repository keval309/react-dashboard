import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export const connectDb = () => {
    console.log("connecting..");
    prisma.$connect().then(() => {
        console.log("connected...");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }).catch((error: any) => {
        console.log("error Occurred", error);
        process.exit(1)
    })
}
