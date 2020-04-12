import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class IndexComponent extends Component{
    constructor(){
        super();
        this.state={
            collections:[]
        }
    }
    componentDidMount(){
        axios({
            method:"GET",
            url:"https://developers.zomato.com/api/v2.1/collections?lat=19.1725568&lon=72.8530944",
            headers:{
                "user-key":"3a8321b70f68f4d7c9072aaa947c87e3",
                "Accept":"application/json"
            }
        }).then(response=>{
            console.log(response);
            this.setState({
                collections:response.data.collections
            })
        }).catch(error=>{
            console.log(error);
        });
    }
    render(){
        return(
            <div className='container'>
                {
                    this.state.collections.map(c=>{
                        return(
                                <div className="container" key={c.collection.collection_id}>
                                    <div className="row">
                                        <div className="col s12">
                                            <div className="card horizontal">
                                                <div className="card-image">
                                                    <img src={c.collection.image_url} alt="x"/>
                                                </div>
                                                <div className="card-stacked">
                                                    <div className="card-content">
                                                        <h3>{c.collection.title}</h3>
                                                        <p className="flow-text">{c.collection.description}</p>
                                                    </div>
                                                    <div className="card-action">
                                                        <Link to={'/search/'+c.collection.collection_id} className='btn orange'>View More !!!</Link>
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
    }
}

export default IndexComponent;