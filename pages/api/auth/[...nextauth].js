import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    // OAuth authentication providers...
  
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorizationUrl:"https://accounts.google.com/o/oauth2/v2/auth",
      scope:'email profile',
      callbackUrl:'http://localhost:3001/api/auth/callback/google'
    }),
    // Passwordless / email sign in
  
  ]
})