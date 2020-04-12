import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RecipeCard from './RecipeCard';

class MenuComponent extends Component{
    constructor(){
        super();
        this.state={
            Italian:[],
            Indian:[],
            Chinese:[],
            American:[],
            Seafood:[],
            Desserts:[],
            menuList:[],
            selectedItems:[],
            isEmpty:true
        }
    }
    componentDidMount(){
        
        var list=[];
        axios({
            method:"GET",
            url:'https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian'
        }).then(response=>{
            console.log('menu data');
            console.log(response);
            this.setState({
                Italian:response.data.meals
            })
        }).catch(error=>{
            console.log(error);
        });
        axios({
            method:"GET",
            url:'https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian'
        }).then(response=>{
            console.log('menu data');
            console.log(response);
            this.setState({
                Indian:response.data.meals
            })
        }).catch(error=>{
            console.log(error);
        });
        axios({
            method:"GET",
            url:'https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese'
        }).then(response=>{
            console.log('menu data');
            console.log(response);
            this.setState({
                Chinese:response.data.meals
            })
        }).catch(error=>{
            console.log(error);
        });
        axios({
            method:"GET",
            url:'https://www.themealdb.com/api/json/v1/1/filter.php?a=American'
        }).then(response=>{
            console.log('menu data');
            console.log(response);
            this.setState({
                American:response.data.meals
            })
        }).catch(error=>{
            console.log(error);
        });
        axios({
            method:"GET",
            url:'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert'
        }).then(response=>{
            console.log('menu data');
            console.log(response);
            this.setState({
                Desserts:response.data.meals
            })
        }).catch(error=>{
            console.log(error);
        });
        axios({
            method:"GET",
            url:'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
        }).then(response=>{
            console.log('menu data');
            console.log(response);
            this.setState({
                Seafood:response.data.meals
            })
        }).catch(error=>{
            console.log(error);
        });
        
        console.log(list);
    }
    addItem=(item)=>{
        this.setState({
            selectedItems:[...this.state.selectedItems,item]
        })
    }
    render(){
        const { cuisine }=this.props.location.state;
        const answer=cuisine.split(',');
        console.log(answer);
        let i=0;
        var input=this.state.Indian;
        for(i=0;i<answer.length;i++){
            console.log('in for loop');
            if(answer[i].includes('Indian')){
                input=this.state.Indian;
            }
            if(answer[i]==='Chinese'){
                input=this.state.Chinese;
            }
            if(answer[i]==='Italian' || answer[i]==='Pizza'){
                input=this.state.Italian;
            }
            if(answer[i]==='Bakery' || answer[i]==='Desserts'){
                input=this.state.Desserts;
            }
            if(answer[i]==='Breakfast' || answer[i]==='Fast Food'){
                input=this.state.American;
            }
            if(answer[i]==='Seafood'){
                input=this.state.Seafood;
            }
        }
        if (input){
            return(
                <div className='container'>
                    <RecipeCard data={input} addFn={this.addItem}/>
                    <div className='center-align'>
                        <Link to={{ pathname:'/bill',state:{ elements:this.state.selectedItems }}} className='btn orange'>
                            { !this.state.selectedItems.length>0 ? 'Select items':'Order' }
                        </Link>
                    </div>
                </div>
            )
        }else{
            return(
                <div className='container center white-text'>
                    <h2>Loading</h2>
                </div>
            )
        }
    }
}

export default MenuComponent;