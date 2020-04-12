import React,{useContext,useState,useEffect} from 'react';
import {AuthContext} from './Context/AuthContext';
import axios from 'axios';
import { geolocated } from "react-geolocated";
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import MapComponent from './Components/MapComponent';
import MenuComponent from './Components/MenuComponent';
import SearchComponent from './Components/SearchComponent';
import IndexComponent from './Components/IndexComponent';
import InfoComponent from './Components/InfoComponent';
import ReviewComponent from './Components/ReviewComponent'; 
import Profile from './Components/Profile';
import BillComponent from './Components/BillComponent';
import Exit from './Components/Exit';
import Home from './Components/Home';
import {BrowserRouter,Route} from 'react-router-dom';
import './app.css'

function App() {
  const {user,setUser,isAuthenticated,setIsAuthenticated}=useContext(AuthContext);
  console.log(user);
  console.log(isAuthenticated);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Route exact path='/' component={Home}/>
        <Route path='/map' component={MapComponent}/>
        <Route path='/search/:collectionID?' component={SearchComponent}/>
        <Route path='/index' component={IndexComponent}/>
        <Route path='/menu' component={MenuComponent}/>
        <Route path='/reviews' component={ReviewComponent}/>
        <Route path='/info/:rID' component={InfoComponent}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/bill' component={BillComponent}/>
        <Route path='/success' component={Exit}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login} />
        <footer className='center'>
          <a href="https://icons8.com/icon/51071/restaurant">Restaurant icon by Icons8</a>
        </footer>
      </BrowserRouter>
    </div>
  );
}

const MainWithGeoloc=geolocated({
  positionOptions: {
      enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App);

export default MainWithGeoloc;