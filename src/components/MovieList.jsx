import React, { useState } from 'react'
import Movie from './movie'
 

const MovieList = () => {
    const [movie, setMovie] = useState([
        {id:1, name:"Home Alone", price:"800$"},
        {id:2, name:"Harry Poter", price:"700$"},
        {id:3, name:"Tom and Jary", price:"400$"},
        {id:4, name:"Endless Love", price:"200$"}
    ])
    return (
        <div>
            {movie.map((value) => {
                return (
                    <Movie value={value}/>
                )
            })}
        </div>
    )
}

export default MovieList



 