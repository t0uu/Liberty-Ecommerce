import {Navigate,Outlet} from 'react-router-dom';


export const ProtectedRoute = ({isLogged}) => {
    return  isLogged === 'login' ? <Outlet/> : <Navigate to='/Login'/> 
}