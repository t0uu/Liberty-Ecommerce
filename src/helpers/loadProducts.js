import {collection, getDocs} from 'firebase/firestore/lite'
import { FirebaseDB } from '../firebase/Config'



export const loadProducts = async(uid = '') => {
    if(!uid) throw new Error('El UID del usuario no existe')

    const collectionRef = collection(FirebaseDB,`${uid}/pedidos/productos`);
    const docs = await getDocs(collectionRef)



    const Products = []
    docs.forEach(doc => {
        Products.push({id:doc.id, ...doc.data()});
    })

    return Products

}