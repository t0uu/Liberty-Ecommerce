import { CartSlice, onAddToCart, onDeleteProduct, onMinusProduct, onPlusProduct } from "../../store/Cart/CartSlice"


const initialState = {
    CartRedux: []
}
const newProduct = {
    id: 1,
    Nombre: 'Prueba',
    Talle: 'L',
    Precio: 2500,
    Image: 'www.image.com',
    quantity: 1,
}

describe('<Pruebas en CartSlice/>',() => {

    test('debe de regresar el estado inicial y llamarse Cart', () => {
        expect(CartSlice.name).toBe('Cart')
    })

    test('debe de agregar al Carrito',() => {
        
        // console.log(onAddToCart(newProduct))
        const state = CartSlice.reducer(initialState,onAddToCart(newProduct))

       expect(state).toEqual({
        CartRedux: [
            {
                id: 1,
                Nombre: 'Prueba',
                Talle: 'L',
                Precio: 2500,
                Image: 'www.image.com',
                quantity: 1, 
            }
        ]
       })
    })
    test('debe de eliminar un producto',() => {
        const state = CartSlice.reducer(initialState,onAddToCart(newProduct))
        // console.log(state)
        const Delete = CartSlice.reducer(initialState,onDeleteProduct(state))
        // console.log(Delete)

        expect(Delete).toEqual({
            CartRedux: []
        })

    })
    test('debe de sumar la cantidad de un producto', () => {
        const state = CartSlice.reducer(initialState,onAddToCart(newProduct))
        const onPlus = CartSlice.reducer(state,onPlusProduct(newProduct))
        // console.log(onPlus)

        expect(onPlus).toEqual({
            CartRedux: [
                {
                    id: 1,
                    Nombre: 'Prueba',
                    Talle: 'L',
                    Precio: 5000,
                    Image: 'www.image.com',
                    quantity: 2, 
                }
            ]
        })
    })

    test('debe de restar la cantidad de un producto', () => {
        const product =  {
            id: 1,
            Nombre: 'Prueba',
            Talle: 'L',
            Precio: 5000,
            Image: 'www.image.com',
            quantity: 2, 
        }
        const state = CartSlice.reducer(initialState,onAddToCart(product))
        const onMinus = CartSlice.reducer(state,onMinusProduct(product))

        expect(onMinus).toEqual({
           CartRedux: [
               {
                id: 1,
                Nombre: 'Prueba',
                Talle: 'L',
                Precio: 2500,
                Image: 'www.image.com',
                quantity: 1, 
            }
        ]
        })
    })


})