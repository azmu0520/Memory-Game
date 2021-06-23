import React from 'react'


const Movie = (props) => {
    return (
        <div>
            <span>{props.value.name}</span>
            <span>{props.value.price}</span>
        </div>
    )
}

export default Movie