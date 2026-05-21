
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is missing");
}

const client = new MongoClient(uri);

await client.connect();

// console.log(" Mongo Connected");

const db = client.db("MediQueue");

export const auth = betterAuth({
  database: mongodbAdapter(db),

  secret: process.env.BETTER_AUTH_SECRET,

  emailAndPassword: {
    enabled: true,
      password: {
    minLength: 6,
  },

  },

      socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID ,
            clientSecret: process.env.GOOGLE_SECRECT , 
        }, 
      }
  
});