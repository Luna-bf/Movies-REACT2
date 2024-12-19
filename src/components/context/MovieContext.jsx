import { useState, createContext } from 'react'

//Le faire aussi dasn Pokémon !!

export const MovieContext = createContext(null)

export const MovieController = ({children}) => {

    const [movies, setMovies] = useState([
           {
            id: 1,
            title: 'Deadpool',
           },
           {
            id: 2,
            title: 'Vaiana 2',
           },
           {
            id: 3,
            title: 'Dune 2',
           }
        ])

        return(
            <MovieContext.Provider value={[movies, setMovies]}>
                {children}
            </MovieContext.Provider>
        )
}