import React, { useContext } from 'react';
import AuthService from '../Services/AuthService';
import {AuthContext} from '../Context/AuthContext';

const Profile =(props)=>{
    console.log(props);
    const{isAuthenticated,user,setIsAuthenticated,setUser,balance,setBalance}=useContext(AuthContext);

    var n=0;

    const onChange=e=>{
        n=e.target.value;
    }

    const update=(x)=>{
        const oldbalance=balance;
        setBalance(oldbalance+x);
        const obj={
            user:user.username,
            newBalance:balance
        };
        fetch('user/add',{
            headers:{
              'Content-Type':"application/json"
            },
            method:"POST",
            body:JSON.stringify(obj)
        }).then(res=>{
            console.log(res);
        }).catch(error=>{
            console.log(error);
        });
    }

    if(isAuthenticated){
        return(
            <div className='container white profile'>
                <h2>My Profile</h2>
                <h5>{ 'Username : '+user.username }</h5>
                <h5>{ 'Role : '+user.role}</h5>
                <h5>{'Amount : '+balance}</h5>
                <h5>{'  '}</h5>
                <div className="input-field">
                    <label htmlFor="balance">Add Balance</label>
                    <input type="number" id="balance" name="balance" onChange={onChange}/>
                </div>
                <button className='btn green darken-2' onClick={()=>update(n)}>ADD</button>
            </div>
        )
    }else{
        return(
            <div className='container center white-text'>
                <h4>Something went wrong</h4>
            </div>
        )
    }
}
        
export default Profile;