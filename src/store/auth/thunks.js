import { createUser, LogoutFirebase, signUser} from "../../firebase/providers"
import { writeUserData } from "../Cart/thunks"
import { checkingCredentials, login, logout } from "./authSlice"


export const checkingAuthentication = () => {

    return async(dispatch) => {
       dispatch(
           checkingCredentials()
           )


    }
}

export const startCreatingUserWithEmailPassword = ({email,password,displayName}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials())
        
        const user = await createUser({email,password,displayName})
        if(!user.ok) return dispatch(logout(user.errorMessage))
        
        // si todo sale bien realizamos el dispatch del login
        dispatch(login(user))
      
    }

}






export const startLoginWithEmailPassword = ({email,password}) => {

    return async(dispatch) => {
        dispatch(checkingCredentials())

       const result = await signUser({email,password})
       await writeUserData(result)
       if(!result.ok) return dispatch(logout(result))
       dispatch(login(result))
        
    }

}

export const startLogout = () => {
    return async(dispatch) => {
        await LogoutFirebase();
        dispatch(logout({}));

    }
}