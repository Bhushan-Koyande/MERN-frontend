import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class InfoComponent extends Component{
    constructor(){
        super();
        this.state={
            r_id:'',
            info:null
        }
    }
    componentDidMount(){
        console.log(this.props);
        const id=this.props.match.params.rID;
        this.setState({
            r_id:id
        })
        axios({
            method:"GET",
            url:"https://developers.zomato.com/api/v2.1/restaurant?res_id="+id,
            headers:{
                "user-key":"3a8321b70f68f4d7c9072aaa947c87e3",
                "Accept":"application/json"
            }
        }).then(response=>{
            console.log(response);
            this.setState({
                info:response.data
            })
        }).catch(error=>{
            console.log(error);
        })
    }
    render(){
        return(
            this.state.info ? 
            <div className='container white restoinfo'>
                <h1>{this.state.info.name}</h1>
                <img src={this.state.info.thumb} alt="https://img.icons8.com/ultraviolet/24/000000/restaurant.png"/>
                <a className="btn-floating btn-large waves-effect waves-light green">{this.state.info.user_rating.aggregate_rating}</a>
                <h3>{'Cuisines : '+this.state.info.cuisines}</h3>
                <h5>{'Address : '+this.state.info.location.address}</h5>
                <h5>{'Timings : '+this.state.info.timings}</h5>
                <h5>{'Cost for Two : '+this.state.info.average_cost_for_two}</h5>
                <Link to={{ pathname:'/menu',state:{ cuisine:this.state.info.cuisines }}} className='btn orange'>Menu</Link>
                <Link to='#'>{'     '}</Link>
                <Link to={{ pathname:'/reviews',state:{ resID:this.state.r_id }}} className='btn orange'>Reviews</Link>
            </div>:
            <div className='container center'>
                <h2 className='white-text'>Please Wait</h2>
            </div>
        )
    }
}

export default InfoComponent;