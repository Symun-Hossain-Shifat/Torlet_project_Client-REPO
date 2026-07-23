import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URL);

await client.connect();

const db = client.db("TorletDatabase");

export const auth = betterAuth({
    database: mongodbAdapter(db),
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },

    emailAndPassword: {
        enabled: true,
    },

    trustedOrigins: [
        process.env.BETTER_AUTH_URL,
    ],
    user: {
        additionalFields: {
            role: {
                defaultValue: 'User',
            },

            isBlocked: {
                defaultValue: false
            },
            createdAt: {
                defaultValue: new Date()
            }

        },
    }
});