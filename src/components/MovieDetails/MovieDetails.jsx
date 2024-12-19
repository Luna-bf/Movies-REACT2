import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

export function MovieDetails() {

    let { movieID } = useParams(); //Je récupère l'id pour faire lz call d'API
    console.log(movieID)
    const [movieDetails, setMovieDetails] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const options = { 
        method: 'GET',
        headers: {
            accept:'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODQ3NWNiM2IzZjUzMTg3ZWY2OGFlNTlhMTdjNTY4OSIsIm5iZiI6MTcyOTg1NzM3Ny4xODQsInN1YiI6IjY3MWI4NzYxZmVmZDFlMDUxMDAwMTZiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V03kkoN-BOr77CZGVXz-1TXDCZ6gCwnaoeRgNBypJsY'
        }
     }

     const fetchMovieDetails = async () => {
        setLoading(true)

        try{
            const response = await axios.get(`/movie/${movieID}`, options);
            setMovieDetails(response.data.results);
            setLoading(false)
        } catch(err) {
            console.error(err)
        }
        finally {
            setLoading(false)
        }
     } 

     return (
        <>
            {movieDetails && movieDetails.map((movieDetail, index) => {
            return(
                <div key={index}>
                    <h2>{detail.original_title}</h2>
                    <p>{detail.overview}</p>
                </div>
            )
        })}
        </>
     )
}