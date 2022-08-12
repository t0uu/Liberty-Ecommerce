export const initialState = {
    // Cuando estamos checking, no deberiamos mostrar nada al usuario hasta verificar que se haya validado su identidad
    status: 'checking', // 'not-authenticated', 'authenticated 'checking'
    uid: null,
    email: null,
    displayName: null,
    emailVerified: null,
    photoURL: null,
    errorMessage: null,
}


export const LoginUserState = {
    status: 'Login', // 'not-authenticated', 'authenticated 'checking'
    uid: 'ABC123',
    email: 'demo@google.com',
    displayName: 'Demo user',
    emailVerified: true,
    photoURL: 'https://foto.jpg',
    errorMessage: null,
}

export const LogoutUserState = {
    status: 'Logout',
    uid: null,
    email: null,
    displayName: null,
    emailVerified: null,
    photoURL: null,
    errorMessage: null,
}


export const demoUser = {
    uid: 'ABC123',
    email: 'demo@google.com',
    displayName: 'Demo user',
    photoURL: 'https://foto.jpg'
}
