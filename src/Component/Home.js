import React, { useEffect } from 'react';
import Movielisting from './Movielisting';
import MovieApi from '../Common/Api/MovieApi';
import { APIkey } from '../Common/Api/MovieApiKey';

const Home = () => {

   
   useEffect(()=>{
    const movieText="Harry";
    const fetchMovies =async()=>{
         const response= await MovieApi.get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
         .catch((err)=>{
            console.log("error",err);
        });
        console.log("Response from Api",response)

    }
    
    fetchMovies()
   },[]);
    return (
        <div>
            <div className='banner-img'>
          <Movielisting/>
           
        </div>
        </div>
    );
};

export default Home;