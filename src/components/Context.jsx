import React,{useState, createContext} from 'react'


export const Kino = createContext();

export const KinoProvider = ({ children }) => {
     const [data, setData] = useState([
         {id:1, name:"Home Alone", price:"800$"},
        {id:2, name:"Harry Poter", price:"700$"},
        {id:3, name:"Tom and Jary", price:"400$"},
        {id:4, name:"Endless Love", price:"200$"}
    ])
    return(
    <Kino.Provider value={[data, setData]}>
        {children}
    </Kino.Provider>)
}

