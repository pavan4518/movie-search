import React, { useEffect } from 'react';
import Movielisting from './Movielisting';
import MovieApi from '../Common/Api/MovieApi';
import { APIkey } from '../Common/Api/MovieApiKey';
import { addMovies } from '../Features/movies/movieSlice';
import {useDispatch} from 'react-redux';
const Home = () => {

    
const dispatch = useDispatch();
const movieText="Harry";
   useEffect(()=>{
   

    const fetchMovies =async()=>{
         const response= await MovieApi.get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
         .catch((err)=>{
            console.log("error",err);
        });
        dispatch(addMovies(response.data));

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