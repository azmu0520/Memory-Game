import React, {useContext} from 'react'
import '../App.css';
import {Kino} from './Context'
 

const Header = () => {
    const [data, setData] = useContext(Kino)
    return (
        <div className="header">
            <span>There are  {data.length} movies</span>
        </div>
    )
}

export default Header