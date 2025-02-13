import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Login with email",

            credentials: {
                username: { lable: "Username", type: "text", placeholder: 'gauravkumar@gmail.com' },
                password: { lable: "Passwrod", type: "password" }
            },

            async authorize(credentials) {
                const username = credentials?.username
                const password = credentials?.password

                console.log("usrname", username);
                console.log("password", password);
                
                const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ]
})
export { handler as GET, handler as POST }