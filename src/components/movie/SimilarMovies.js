import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useLocation, useHistory } from 'react-router-dom';
const SimilarMovies = () => {
    const match = useLocation()
    console.log(match);
    return (
        <div>
            similar
        </div>
    )
}

export default SimilarMovies
