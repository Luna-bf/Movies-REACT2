import {useState, createContext} from 'react'

export const MovieContext = createContext(null)

export const MovieController = ({children}) => {
    
    const [movies, setMovies] = useState([
        {
            id : 1,
            title : 'Dune 2'
        },
        {
            id : 2,
            title : 'Sleep'
        },
        {   
            id : 3, 
            title : 'Old boy'
        }
    ])

    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {children}
        </MovieContext.Provider>
    )
}