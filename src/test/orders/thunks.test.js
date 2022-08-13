import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/Config";
import {createOrder} from '../../store/orders/orderSlice'
import { creatingOrder } from "../../store/orders/thunks";


const data =  {
    id: 1,
    Nombre: 'NIKE SB DUNK HIGH  PRO ISO ORANGE LABEL',
    Precio: 40000,
    Categoria: 'Zapatilla',
    Variant: 'Zapatilla',
    Image: ['https://res.cloudinary.com/do5jvqtn9/image/upload/q_auto:low/v1659364260/Liberty-Ecommerce/Zapatilla_NIKE_SB_DUNK_HIGH_PRO_ISO_ORANGE_LABEL_1_nkriic.jpg','https://res.cloudinary.com/do5jvqtn9/image/upload/q_auto:low/v1659364262/Liberty-Ecommerce/Zapatilla_NIKE_SB_DUNK_HIGH_PRO_ISO_ORANGE_LABEL_5_ma2zhv.jpg','https://res.cloudinary.com/do5jvqtn9/image/upload/q_auto:low/v1659364261/Liberty-Ecommerce/Zapatilla_NIKE_SB_DUNK_HIGH_PRO_ISO_ORANGE_LABEL_2_vyfxqq.jpg','https://res.cloudinary.com/do5jvqtn9/image/upload/q_auto:low/v1659364262/Liberty-Ecommerce/Zapatilla_NIKE_SB_DUNK_HIGH_PRO_ISO_ORANGE_LABEL_4_zx3ilx.jpg'],
    Details: `La nueva Dunk High del nuevo pack "Unbleached" de Orange Label exclusivo para skate shops. Presenta un diseño confeccionado en una combinación de cuero y lona suave característico de esta línea, con un singular concepto que te permite teñir tus zapatillas del color que quieras y obtener un acabado diferente en cada textura.`,
    Talle: '40'
}

describe('Pruebas en orders',() => {
    
    const dispatch = jest.fn();
    const getState = jest.fn()
    beforeEach(() => jest.clearAllMocks())
    test('debe de crear una Orden', async() => {
        const uid = 'ABC123';
        const newOrder = {
            useriD: uid,
            items: {...data},
            Data: new Date().getTime(),
            status: 'pendiente',
            total: 40000
        }
        getState.mockReturnValue({auth: {uid: uid}})
        const newDoc = doc(collection(FirebaseDB,`usuarios/${uid}/orders`))
        await setDoc(newDoc,newOrder)
        newOrder.id = newDoc.id

        dispatch(createOrder(newOrder))
    })
})