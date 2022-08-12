import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/Config";
import { loadOrders } from "./loadOrders";
import { createOrder,orderSet } from "./orderSlice"



export const creatingOrder = (data,total) => {

    return async(dispatch,getState) => {
       const {uid} = getState().auth;
       const newOrder = {
        userId: uid,
        items: {...data},
        Data: new Date().getTime(),
        status: 'pendiente',
        total: total
       }

       const newDoc = doc(collection(FirebaseDB,`usuarios/${uid}/orders`))

       await setDoc(newDoc,newOrder)
       newOrder.id = newDoc.id

       dispatch(createOrder(newOrder))
    }

}

export const startLoadingOrders = (uid = '') => {
return async(dispatch,getState) => {
    const {uid} = getState().auth;
    if(!uid) throw new Error('EL UID del usuario no existe')

    const setOrders = await loadOrders(uid)
    dispatch(orderSet(setOrders))
}
}