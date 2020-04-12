import React from 'react';
import ReactDOM from 'react-dom';
import MainWithGeoloc from './App';
import AuthProvider from './Context/AuthContext';

ReactDOM.render(<AuthProvider><MainWithGeoloc/></AuthProvider>, document.getElementById('root'));

