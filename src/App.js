
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import React from 'react';
 import Header from './Component/Header';
 import Moviedetails from './Component/Moviedetails';
 import PageNotfound from './Component/PageNotfound';
 import Footer from './Component/Footer';
import Home from './Component/Home';
import './App.css'


function App() {
  return (
    
        <BrowserRouter >
    <div className="App">
      
   <Header></Header>
   <div className='container'>
   <Routes>
   
    <Route path="/" Exact Component={Home}></Route>
    <Route path="/movie/:imdbID" Component={Moviedetails}></Route>
    <Route Component={PageNotfound}></Route>
    </Routes> 
    </div>   
    <Footer/>
    
    </div>
    </BrowserRouter>

    
  );
}

export default App;
