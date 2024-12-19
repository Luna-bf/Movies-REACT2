import { useContext } from "react"
import { MovieContext } from "../../context/MovieContext"

const Movies = () => {

    const [movies, setMovies] = useContext(MovieContext);

    return(
        <>
            <h1>Movies at the cinema: {movies.length}</h1>
        </>
    )
}

export default Movies