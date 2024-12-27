import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase.config';
import { useEffect } from 'react';


export const authContex=createContext()

const AuthProvider = ({children}) => {

    const[user,setUser]=useState(null)
    const [loader,setLoader]=useState(true)
    const googleProvider=new GoogleAuthProvider()

    const createUser=(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin=(email,password)=>{
        setLoader(true);
      return  signInWithEmailAndPassword(auth,email,password)
    }


    const googleLogin=()=>{
        setLoader(true)
       return signInWithPopup(auth,googleProvider)
    }

    const updateUser=(name,photo)=>{
        setLoader(true)
       return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }



    const userLogOut=()=>{
        setLoader(true)
       return signOut(auth)
    }





    useEffect(()=>{
      const unSubscribe=  onAuthStateChanged(auth,user=>{
            setUser(user)
            setLoader(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo={
        user,
        setUser,
        loader,
        createUser,
        userLogin,
        userLogOut,
        googleLogin,
        updateUser
        

    }
    return (
        <authContex.Provider value={authInfo}>
            {children}
        </authContex.Provider>
    );
};

export default AuthProvider;