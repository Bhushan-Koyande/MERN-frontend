import React, { Component } from 'react';
import axios from 'axios';

class ReviewComponent extends Component{
    constructor(){
        super();
        this.state={
            Reviews:null
        }
    }
    componentDidMount(){
        const { resID }=this.props.location.state;
        const URL='https://developers.zomato.com/api/v2.1/reviews?res_id='+resID;
        axios({
            url:URL,
            method:"GET",
            headers:{
                "user-key":"3a8321b70f68f4d7c9072aaa947c87e3",
                "Accept":"application/json"
            }
        }).then(response=>{
            console.log(response);
            this.setState({
                Reviews:response.data
            })
        }).catch(error=>{
            console.log(error);
        });
    }
    render(){
        if(this.state.Reviews){
            return(
                <div className='container'>
                    {
                        this.state.Reviews.user_reviews.map(r=>{
                            return(
                                <div className="container" key={r.review.id}>
                                    <div className="row">
                                        <div className="col s12">
                                            <div className="card horizontal">
                                                <div className="card-image">
                                                    <img src="https://img.icons8.com/bubbles/50/000000/user.png"/>
                                                </div>
                                                <div className="card-stacked">
                                                    <div className="card-content">
                                                        <h3>{r.review.user.name}</h3>
                                                        <p className="flow-text">{r.review.review_text}</p>
                                                    </div>
                                                    <div className="card-action">
                                                        <a className="btn-floating btn-large waves-effect waves-light green">{r.review.rating}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }else{
            return(
                <div>
                    <h2>No Reviews available</h2>
                </div>
            )
        }
    }
}

export default ReviewComponent;