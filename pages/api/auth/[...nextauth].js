import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { db } from '../../../firebase'
import { FirebaseAdapter } from '@next-auth/firebase-adapter';
require('dotenv').config()


export default NextAuth({
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    adapter: FirebaseAdapter(db),
})

console.log("Google ID:", process.env.GOOGLE_ID);
console.log("Google Secret:", process.env.GOOGLE_SECRET);
