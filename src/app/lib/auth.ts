import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { connectDB } from "./utils";
import { User } from "./models";
export const { handlers:{GET,POST}, auth,signIn,signOut } = NextAuth({ 
    providers: [ GitHub({clientId:process.env.AUTH_GITHUB_ID,clientSecret:process.env.AUTH_GITHUB_SECRET}) ],
    callbacks:{
        async signIn({ user, account, profile, email, credentials }) {
          console.log(user,account,"profile"+profile,email,credentials);

          if(account?.provider==='github'){
            connectDB()

            try{
                const existingUser = await User.findOne({email:profile?.email});
                if(!existingUser){
                    const newUser = await new User({
                        username:user?.name,
                        email:user?.email,
                        img:user?.image

                    })
                    console.log("new user",newUser)

                    await newUser.save()
                }

            }catch(error){
                console.log(error);
                return false
            }
          }
          return true
        },
       
    }
 })