import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export const CartSlice = createSlice({
    name: 'Cart',
    initialState: {
        CartRedux: [],
    },
    reducers: {
       onAddToCart: (state,{payload}) => {
       if(state.CartRedux.some((item) => item.id === payload.id)){
        Swal.fire({
            title: '¡Producto ya agregado al Carrito!',
            text: 'Si deseas puedes continuar sumando ese producto desde el carrito',
            icon: 'alert',
            background: '#181818',
            color: 'white',
            backgrop: `
            rgba(0,0,000,0.5)
            `
          })
        }else{
            state.CartRedux.push(payload)
        }
       },
       onDeleteProduct:(state,action) => {   
        state.CartRedux = state.CartRedux.filter(state => state.id !== action.payload)
    },
     onPlusProduct: (state,{payload}) => {
                state.CartRedux.map(product => {
                    if(product.id === payload.id){
                     const quantity =  product.quantity += 1
                      product.Precio *= quantity
                    }
                    return product
                })
     },
     onMinusProduct: (state,{payload}) => {
        state.CartRedux.map(product => {
            if(product.id === payload.id){
             const quantity =  product.quantity -= 1
             product.Precio /= quantity + 1
             }
            return product
        })
    },
    onCleanCart: (state,{payload}) => {
        state.CartRedux.splice(0,payload)
    }
    
}
   
});


// Action creators are generated for each case reducer function
export const { onAddToCart, onDeleteProduct,onPlusProduct,onMinusProduct,onCleanCart} = CartSlice.actions;