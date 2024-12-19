import { useState, useEffect } from "react";
import axios from 'axios';

export function Details() {
    const [ details, setDetails ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    const options = {
        method: 'GET',
        headers: {
            accept:'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODQ3NWNiM2IzZjUzMTg3ZWY2OGFlNTlhMTdjNTY4OSIsIm5iZiI6MTcyOTg1NzM3Ny4xODQsInN1YiI6IjY3MWI4NzYxZmVmZDFlMDUxMDAwMTZiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V03kkoN-BOr77CZGVXz-1TXDCZ6gCwnaoeRgNBypJsY'
        }
    }

    const fetchDetails = async () => {
        setLoading(true);
        
        try {
            const response = await axios.get(`https://www.themoviedb.org/movie/${movieID}`, options);
    
            setDetails(response.data.results);
            setLoading(false);
        } catch(err) {
            console.error(err);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchDetails();
    }, []);

    return(
        <>
        {details && details.map((detail, index) => {
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