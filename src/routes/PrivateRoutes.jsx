import React, { useContext } from 'react';
import { authContex } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const{user,loader}=useContext(authContex);
    const location=useLocation()
    // console.log(location.state);
    if(loader){
        return <p className='w-full mx-auto text-center mt-28'><span className="loading  loading-bars loading-lg"></span></p>
    }

    if(!user){
       return <Navigate state={location.state} to={'/login'}></Navigate>
       
    }


    if(user) return(children)
    
};

export default PrivateRoutes;