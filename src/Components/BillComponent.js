import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from '../Context/AuthContext';

class BillComponent extends Component{
    static contextType = AuthContext;
    constructor(){
        super();
        this.state={
            total:0,
            error:''
        }
    }
    componentDidMount(){
        const { elements }=this.props.location.state;
        const { balance }=this.context;
        let i=0;
        let c=0;
        for(i=0;i<elements.length;i++){
            c=c+elements[i].price;
        }
        this.setState({
            total:c
        });
        if(this.state.total>balance){
            this.setState({
                error:"Not enough money,We're sorry !"
            });
        }
    }
    render(){
        return(
            <div className='container center'>
                <ul className="collection with-header">
                    <li className="collection-header"><h1>Your Bill</h1></li>
                    {
                        this.props.location.state.elements.map(ele=>{
                            return(
                                    <li className="collection-item" key={Math.random()}>
                                        <h3>{ele.name+'                 Rs.'+ele.price}</h3>
                                    </li>
                            )
                        })
                    }    
                </ul>
                <div className='center-align'>
                    <h2>{'Total = Rs.'+this.state.total}</h2>
                </div>
                {
                    this.state.error ? <div className='red-text'>{this.state.error}</div>:
                    <div className='center-align'>
                        <Link to='/success' className='btn orange' onClick={this.deduct}>Confirm</Link>
                    </div>
                }
            </div>
        )
    }
    deduct=()=>{
        const {balance}=this.context;
        let x=balance-this.state.total;
        const { setBalance }=this.context;
        setBalance(x);
        const {user}=this.context;
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
}

export default BillComponent;