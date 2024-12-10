import { AuthContext } from '../contex/AuthContext'
import { createUserWithEmailAndPassword , onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../fairbase/fairbase';
import { useEffect, useState } from 'react';

export {AuthContext};
function AuthProvider({children}) {
const [user ,setUser]  =  useState(null)

 const createUser = (email , password) => {
    return createUserWithEmailAndPassword(auth, email, password)
 };

 const LogIn = (email , password )  => {
    return signInWithEmailAndPassword (auth , email , password)
 };


 const signOutUser = ()=> {
   return signOut(auth)
 } 


 useEffect(() => {
   const unSubscribe = onAuthStateChanged(auth , (carrentUser) => { 
      if (carrentUser){
      setUser(carrentUser);
      }else{
      console.log("user is loguot");
      setUser(null)
      }
    })

    return () => {
      unSubscribe()
    }

 }, [])



  const authInfo = {
    user,
    createUser,
    LogIn,
    signOutUser
    
  };
  

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
  
}

export default AuthProvider ;
