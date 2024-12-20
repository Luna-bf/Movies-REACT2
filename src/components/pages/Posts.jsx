import axios from 'axios'
import {useState, useEffect} from 'react'

const Posts = () => {

    const fetchPosts = async () => {
    
        try{
            const response = await axios.get(`http://localhost:3002/posts`, {
                headers : {
                    Authorization : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjc2NDIwOGY5MTc2NmI2MDEyN2Q1ODU2IiwiaWF0IjoxNzM0NjE2NTg4fQ.tc9dcArFBOvJ0uN0TOGu2oT_Yeux022GT3jovNEB4oM`
                }
            })
            console.log(response)
            
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return(
        <h1>Posts Page</h1>
    )
}

export default Posts