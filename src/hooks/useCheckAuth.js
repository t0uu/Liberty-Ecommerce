import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "../firebase/Config"
import { login, logout } from "../store/auth/authSlice"
import { startLoadingOrders } from '../store/orders/thunks'

export const useCheckAuth = () => {
    
  const {status} = useSelector(state => state.auth)
  const dispatch = useDispatch()
    useEffect(() => {
      onAuthStateChanged(FirebaseAuth, async(user) => {
        
        if(!user) return dispatch(logout());
        const {uid,email,displayName, photoURL} = user
        dispatch(login({uid,email,displayName, photoURL}))
        dispatch(startLoadingOrders())
      })
    }, [])

    return {
        status
    }
}