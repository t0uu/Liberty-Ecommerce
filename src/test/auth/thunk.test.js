import { startCreatingUserWithEmailPassword, startLoginWithEmailPassword } from "../../store/auth/thunks";
import {demoUser} from '../../test/fixtures/authFixtures'
import {createUser, signUser} from '../../firebase/providers'
import { checkingCredentials, login } from "../../store/auth/authSlice";
import { writeUserData } from "../../store/Cart/thunks";

jest.mock('../../firebase/providers')


describe('Pruebas en Auth Thunks',() => {
    const dispatch = jest.fn()


    test('debe de llamar startCreatingUserWithEmailPassword', async() => {

        const loginData = {ok:true,...demoUser};

        const formData = {email: demoUser.email,password: '123456', displayName: demoUser.displayName}

        await createUser.mockResolvedValue(loginData)
        await startCreatingUserWithEmailPassword(formData)(dispatch)

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        expect(dispatch).toHaveBeenCalledWith(login(loginData))
    })
    test('debe de llamar startLoginWithEmailPassword', async() => {

        const loginData = {ok:true,...demoUser};
        const writeUser = {email: demoUser.email,displayName: demoUser.displayName}
        const formData = {email: demoUser.email,password: '123456'}

        await signUser.mockResolvedValue(loginData)
        await writeUserData(writeUser)
        await startLoginWithEmailPassword(formData)(dispatch)
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        expect(dispatch).toHaveBeenCalledWith(login(loginData))
    })
})