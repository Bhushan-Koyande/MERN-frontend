import React,{createContext,useState,useEffect} from 'react';
import AuthService from '../Services/AuthService';

export const AuthContext=createContext();

export default ({children})=>{
    const [user,setUser]=useState(null);
    const [isAuthenticated,setIsAuthenticated]=useState(false);
    const [isLoaded,setIsLoaded]=useState(false);
    const [balance,setBalance]=useState(0);

    useEffect(()=>{
        AuthService.isAuthenticated().then(data=>{
            setUser(data.user);
            setIsAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
        });
    },[]);

    return(
        <div>
            {!isLoaded ? <h1>Loading..</h1>:
            <AuthContext.Provider value={{user,setUser,isAuthenticated,setIsAuthenticated,balance,setBalance}}>
                {children}
            </AuthContext.Provider>}
        </div>
    )
}