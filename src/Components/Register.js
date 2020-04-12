import React, {useState,useRef,useEffect} from 'react';
import AuthService from '../Services/AuthService';
import Message from './Message';

const Register=props =>{
    const [user,setUser]=useState({username:"",password:"",role:"user"});
    const [message,setMessage]=useState(null);
    let timeID=useRef(null);

    useEffect(() =>{
        return ()=>{
            clearTimeout(timeID);
        }
    },[]);

    const onChange=e =>{
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }

    const resetForm=() =>{
        setUser({username:"",password:"",role:""});
    }

    const onSubmit=e =>{
        e.preventDefault();
        AuthService.register(user).then(data=>{
            const {message}=data;
            setMessage(message);
            resetForm();
            if(!message.msgError){
                timeID=setTimeout(() =>{
                    props.history.push('/login');
                },2000)
            }
        })
    }

    return(
            <div className="container">
                <form onSubmit={onSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
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
                            Register
                        </button>
                    </div>
                </form>
                {message ? <Message message={message}/>:null}
            </div>        
    )
}

export default Register;