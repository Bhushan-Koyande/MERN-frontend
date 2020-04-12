import React, { Component } from 'react';
import styled from 'styled-components';
import Title from './Title';
import Image from './Image';

class RecipeCard extends Component {
	render(){
		var priceList=[];
		console.log("PROPS=>", this.props);
			return(
				<div>
				   {this.props.data.map((item, index) => {
					   let price=Math.floor(Math.random()*(500-100)+100);
					   priceList=[...priceList,price];
					   return ( 
						   <Card 
							   key={index} 
							   href={item.strSource}>
							   <Image source={item.strMealThumb} text={item.strMeal} />
							   <a className="btn-floating btn-large waves-effect waves-light red" onClick={()=>{this.add(item,priceList[index])}}><i className="material-icons">add</i></a>
							   <Title title={item.strMeal} />
							  <h6>{ 'Rs '+ priceList[index]}</h6>
						   </Card> 
					   )
				   })}
				</div>
			)
	}
	add=(x,amt)=>{
		var obj={
			name:x.strMeal,
			price:amt
		}
		this.props.addFn(obj);
	}
}

const Card = styled.a`
    max-width: 350px;
    background:#fff;
	width: 100%;
	display: inline-block;
	border-radius: 3px;
	text-decoration: none;
	color: #000;
	margin: 0 10px 15px;
    box-shadow: 7px 7px 50px -10px rgba(0, 0, 0, .5);
`;

export default RecipeCard;