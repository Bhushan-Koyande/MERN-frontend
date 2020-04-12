import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SearchComponent extends Component{
    constructor(){
        super();
        this.state={
            restaurantList:[],
            selectedRestaurant:null
        }
    }
    componentDidMount(){
        if(this.props.match.params.collectionID){
            const id=this.props.match.params.collectionID;
            axios({
                url:"https://developers.zomato.com/api/v2.1/search?collection_id="+id,
                method:"GET",
                headers:{
                    "user-key":"3a8321b70f68f4d7c9072aaa947c87e3",
                    "Accept":"application/json"
                }
            }).then(response=>{
                console.log(response);
                this.setState({
                    restaurantList:response.data.restaurants
                })
            }).catch(error=>{
                console.log(error);
            });
        }else{
            axios({
                url:"https://developers.zomato.com/api/v2.1/search?lat=19.1231776&lon=72.8339267&radius=2000&sort=real_distance&order=asc",
                method:"GET",
                headers:{
                    "user-key":"3a8321b70f68f4d7c9072aaa947c87e3",
                    "Accept":"application/json"
                }
            }).then(response=>{
                console.log(response);
                this.setState({
                    restaurantList:response.data.restaurants
                })
            }).catch(error=>{
                console.log(error);
            });
        }   
    }
    render(){
        return(
            <div className='container'>
                {
                    this.state.restaurantList.map(r=>{
                        return(
                            <div className="container" key={r.restaurant.R.res_id}>
                                <div className="row">
                                    <div className="col s12">
                                        <div className="card horizontal">
                                            <div className="card-image">
                                                <img src={r.restaurant.thumb} alt="https://img.icons8.com/ultraviolet/24/000000/restaurant.png"/>
                                            </div>
                                            <div className="card-stacked">
                                                <div className="card-content">
                                                    <h3>{r.restaurant.name}</h3>
                                                    <p className="flow-text">{r.restaurant.cuisines}</p>
                                                </div>
                                                <div className="card-action">
                                                    <Link to={'/info/'+r.restaurant.R.res_id} className='btn orange'>More Info !</Link>
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

export default SearchComponent;