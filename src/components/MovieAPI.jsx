import axios from 'axios'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Details } from './Details/Details'
import { useParams } from 'react-router-dom';

export function MovieAPI() {

    let { movieID } = useParams();
    const [ movies, setMovies ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ search, setSearch ] = useState(''); //l'etat qui va me permettre de rentrer des données dans un input précis
    const [ query, setQuery ] = useState(`Deadpool`); //au moment du submit, le query va prendre la valeur
    const options = { 
        method: 'GET',
        headers: {
            accept:'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODQ3NWNiM2IzZjUzMTg3ZWY2OGFlNTlhMTdjNTY4OSIsIm5iZiI6MTcyOTg1NzM3Ny4xODQsInN1YiI6IjY3MWI4NzYxZmVmZDFlMDUxMDAwMTZiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V03kkoN-BOr77CZGVXz-1TXDCZ6gCwnaoeRgNBypJsY'
        }
     }

    const fetchMovies = async () => {
        setLoading(true) //je met le chargement au début car la page doit se charger
        
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`, options);
            setMovies(response.data.results);
            setLoading(false); //Je met fin au chargement car j'ai un résultat
        } catch(err) {
            console.error(err);
        }
        finally {
            setLoading(false);
        }
    }

    console.log(movies)
    console.log(setMovies)

    useEffect(() => {
        fetchMovies();
    }, [query]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(search);
    }
    
    return(
        <>
        {/*A FINIR*/}
        {/*FAIRE EN SORTE DE POUVOIR CHERCHER UN FILM PAR SON NOM ET LE TROUVER (consigne)*/}
        {/*Installer tailwind et y personnaliser (cards)*/}
        {/*DEMANDER DE L AIDE POUR LE BACK*/}
            <h1>Movie API</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onClick={e => setSearch(e.target.value)}></input>
                <input type="submit" />
            </form>
            
            {movies && movies.map((movie, index) => {
            return(
                <div key={index}>
                    <Link to={`/movie/${movie.id}`}> {/*le lien redirige vers l'id du film*/}
                        <h2>{movie.original_title}</h2>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="poster" />
                        <p>{/*Mettre les ratings !!*/}</p>
                    </Link>
                </div>
            )
            })}
        </>
    )
}