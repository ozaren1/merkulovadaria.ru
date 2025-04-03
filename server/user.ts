"use server";

import {auth} from "@@@/auth"

export const signIn = async () => {
    await auth.api.signInEmail({
        body: {
            email: "ozareniep@gmail.com",
            password: "P$asap323"
        }
    })
}

export const signUp = async () => {
    await auth.api.signUpEmail({
        body: {
            password: "P$asap323",
            email: "ozareniep@gmail.com",
            name: "Admin Sssas",
           
        }
    })
}
