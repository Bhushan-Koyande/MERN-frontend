import React, {useState,useContext} from 'react';
import AuthService from '../Services/AuthService';
import Message from './Message';
import {AuthContext} from '../Context/AuthContext';

const Login=props =>{
    const [user,setUser]=useState({username:"",password:""});
    const [message,setMessage]=useState(null);
    const authContext=useContext(AuthContext);

    const onChange=e =>{
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }

    const onSubmit=e =>{
        e.preventDefault();
        AuthService.login(user).then(data=>{
            const { isAuthenticated,user,message }=data;
            if(isAuthenticated){
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                props.history.push('/index');
            }else{
                setMessage(message);
            }
        })
    }

    return(
            <div className="container">
                <form onSubmit={onSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="username">username</label>
                        <input type="text" id="username" name="username" onChange={onChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">password</label>
                        <input type="password" id="password" name="password" onChange={onChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn green darken-2" type="submit">
                            Log In
                        </button>
                    </div>
                </form>
                {message ? <Message message={message}/>:null}
            </div>        
    )
}

export default Login;