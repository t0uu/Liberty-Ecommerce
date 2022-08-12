import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
            // Cuando estamos checking, no deberiamos mostrar nada al usuario hasta verificar que se haya validado su identidad
            status: 'checking', // 'not-authenticated', 'authenticated 'checking'
            uid: null,
            email: null,
            displayName: null,
            emailVerified: null,
            photoURL: null,
            errorMessage: null,
    },
    reducers: {
        login: (state,{payload}) => {
            state.status = 'login'; // 'not-authenticated', 'authenticated 'checking'
            state.uid = payload.uid;
            state.email =  payload.email;
            state.emailVerified = payload.emailVerified;
            state.displayName = payload.displayName;
            state.errorMessage = null;
        },
        logout: (state, {payload}) => {
            state.status = 'logout'; // 'not-authenticated', 'authenticated 'checking'
            state.uid = null;
            state.email =  null;
            state.emailVerified = null;
            state.displayName = null;
            state.errorMessage = payload?.errorMessage;
        },
        // Función para saber si está autenticado o no.
        checkingCredentials: (state,{payload}) => {
            state.status = 'checking'

        }
    }
});


// Action creators are generated for each case reducer function
export const { login,logout,checkingCredentials } = authSlice.actions;