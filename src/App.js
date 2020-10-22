import React, { useEffect } from 'react';
import logo from './logo.svg';
import  { useDispatch, useSelector } from 'react-redux'
import {getMoviesByDiscover } from './redux/actions/getManyMovies'
import './App.css';

function App() {
const movies = useSelector(state => state.movies)
const { page } = useSelector(state => state.page)


  const dispatch = useDispatch()
  console.log(movies);

  const Categories = [
    {id: 28, name: "Action"},
    {id: 12, name: "Adventure"},
    {id: 16, name: "Animation"},
    {id: 35, name: "Comedy"},
    {id: 80, name: "Crime"},
    {id: 99, name: "Documentary"},
    {id: 18, name: "Drama"},
    {id: 10751, name: "Family"},
    {id: 14, name: "Fantasy"},
    {id: 36, name: "History"},
    {id: 27, name: "Horror"},
    {id: 10402, name: "Music"},
    {id: 9648, name: "Mystery"},
    {id: 10749, name: "Romance"},
    {id: 878, name: "Science Fiction"},
    {id: 10770, name: "TV Movie"},
    {id: 53, name: "Thriller"},
    {id: 10752, name: "War"},
    {id: 37, name: "Western"},
  ];

  
  useEffect(() => {
    dispatch(getMoviesByDiscover('popular', page))
  },[dispatch, page])

  return (
    <div className="App">
      <br />
      <br />
      <br />
      <br />

{Categories.map( x =>  <button key ={}>
      Add page
    </button>
)}

    <button onClick={() => dispatch({type: 'PAGE_UP'})}>
      Add page
    </button>

    <button onClick={() => dispatch({type: 'PAGE_DOWN'})}>
      back page
    </button>
    </div>
  );
}

export default App;
