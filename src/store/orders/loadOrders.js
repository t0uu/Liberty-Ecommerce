import { query } from "firebase/database";
import { collection, getDocs,orderBy} from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/Config"




export const loadOrders = async(uid = '') => {
    if(!uid) throw new Error('El UID del usuario no existe')

    const collectionRef = collection(FirebaseDB,`usuarios/${uid}/orders`);
    const getOrdersQuery = query(collectionRef,orderBy('Data','asc'))
    const docs = await getDocs(getOrdersQuery)
  
            const orders = []
        docs.forEach(doc => {
               orders.push({id:doc.id, ...doc.data()});
           });
           console.log(orders)
           return orders
}