import { async } from '@firebase/util';
import { createSlice } from '@reduxjs/toolkit';

export const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: [],
        loading: false,
        error:null
    },
    reducers: {
        createOrderSuccess: (state,{payload}) => {
            state.orders = payload
        },
        createOrderFail: (state,{payload}) => {
            state.orders = null;
            state.loading = false;
            state.error = payload.error;
        },
        createOrder: (state,{payload}) =>{
            state.orders = payload
        },
        orderSet: (state,action) => {
            state.orders = action.payload
        }
        
    }
});


// Action creators are generated for each case reducer function
export const { createOrder,createOrderFail,createOrderSuccess,orderSet } = ordersSlice.actions;