import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FirebaseAuth} from './Config'




export const createUser = async({email,password,displayName}) => {
    
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const {uid,photoURL} = resp.user
        await updateProfile(FirebaseAuth.currentUser,{
            displayName
        });
        return {
            ok:true,
            uid,photoURL,email,displayName
        }
    } catch (error) {
        return {
            ok:false,
            errorMessage: error.message
        }
    }  
}



export const signUser = async({email,password}) => {
    try {
   const resp = await signInWithEmailAndPassword(FirebaseAuth,email,password)
   const {uid,photoURL,displayName} = resp.user
   return{
       ok:true,
       uid,photoURL,displayName,email
   }
    } catch (error) {
        return {
            ok:false,
            errorMessage: error.message
        }
    }
   
}



export const LogoutFirebase = async() => {
return await FirebaseAuth.signOut();
}