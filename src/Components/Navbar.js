import React,{useContext,useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import AuthService from '../Services/AuthService';
import {AuthContext} from '../Context/AuthContext';

const Navbar=props=>{
    
    const{isAuthenticated,user,setIsAuthenticated,setUser,balance,setBalance}=useContext(AuthContext);

    const onClickLogoutHandler=() =>{
        AuthService.logout().then(data=>{
            if(data.success){
                setUser(data.user);
                setIsAuthenticated(false);
            }
        })
    }

    useEffect(()=> {
        fetch('user/get-balance',{
            headers:{
              'Content-Type':"application/json"
            },
            method:"POST",
            body:JSON.stringify({username:user.username})
        }).then(res=>{
            const response=res.json();
            response.then(data=>{
              console.log(data);
              setBalance(data.balance);
            })
        }).catch(error=>{
            console.log(error);
        });
    },[user.username,isAuthenticated]);    
    
    const unauthenticatedNavbar=() =>{
        return(
            <>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/login'>
                        Login
                    </Link>
                </li>
                <li>
                    <Link to='/register'>
                        Register
                    </Link>
                </li>
            </>
        )
    }

    const AuthenticatedNavbar=() =>{
        return(
            <>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                {
                    user.role==="admin" ?
                    <li>
                        <Link to='/admin'>
                            Admin
                        </Link>
                    </li>:null
                }
                <li>
                    <Link to='/map'>
                        Map
                    </Link>
                </li>
                <li>
                    <Link to='/profile'>
                        Profile
                    </Link>
                </li>
                <li>
                    <Link to='/search'>
                        Search
                    </Link>
                </li>
                <li>
                    <button type='button' className='waves-effect waves-light green darken-2 btn' onClick={onClickLogoutHandler}>
                        <Link to='/'>
                            LOG OUT
                        </Link>
                    </button>
                </li>
            </>
        )
    }

    return(
        <nav className="nav-extended red darken-2">
            <div className="nav-wrapper red darken-2">
                <div className='container'>
                    <Link to='#'>
                        <div className="brand-logo">Crave Better</div>
                    </Link>
                    <ul id="nav-mobile" className="right">
                        {!isAuthenticated ? unauthenticatedNavbar():AuthenticatedNavbar()}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;