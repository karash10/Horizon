'use server';
import { cookies } from "next/headers";
import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { parseStringify } from "../utils";

// export const signIn =async({email,password}:signInProps) => {
//      try{
//         const {account} = await createAdminClient();
//         const response = await account.createEmailPasswordSession(email,password)
//         return parseStringify(response);
//      }catch(error){
//          console.error('error')
//      }
// }
export const signIn = async ({ email, password }: signInProps) => {
  try {
    const { account } = await createAdminClient();
    
    const session = await account.createEmailPasswordSession(email, password);

    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(session);
  } catch (error) {
    // Log the actual error for better debugging
    console.error('Error during sign in:', error);
    return null;
  }
}

// export const signUp =async (userData: SignUpParams) => {
//     const {email,password,firstName,lastName}=userData
//     try{
//         const { account } = await createAdminClient();
//         const newUserAccount =await account.create(ID.unique(),
//             email,
//             password,
//             '${firstName} ${lastName}');
//         const session = await account.createEmailPasswordSession(email, password);
//     (await cookies()).set("appwrite-session", session.secret, {
//     path: "/",
//     httpOnly: true,
//     sameSite: "strict",
//     secure: true,
//   });
//   return parseStringify(newUserAccount);
//     }catch(error){
//         console.error('error')
//     }
// }
export const signUp = async (userData: SignUpParams) => {
    const { email, password, firstName, lastName } = userData;
    try {
        const { account } = await createAdminClient();
        const newUserAccount = await account.create(
            ID.unique(),
            email,
            password,
            // FIX 1: Changed single quotes to backticks to correctly format the name
            `${firstName} ${lastName}`
        );

        const session = await account.createEmailPasswordSession(email, password);

        (await cookies()).set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        return parseStringify(newUserAccount);

    } catch (error) {
        // FIX 2: Changed the generic 'error' to the actual error object for better debugging
        console.error('Error during sign up:', error);
    }
}



export async function getLoggedInUser() {
    try {
        const { account } = await createSessionClient();
        const user = await account.get();
        return parseStringify(user)
      } catch (error) {
        return null;
      }
}

export const logoutAccount =async () =>{
  try{
    const {account} = await createSessionClient();

    (await cookies()).delete('appwrite-session')
    await account.deleteSession('current');
  }catch(error){
    return null;
  }
}