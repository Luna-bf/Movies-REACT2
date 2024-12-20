import axios from 'axios'
import { useState, useEffect } from 'react'

const Posts = () => {
    const [ posts, setPosts ] = useState(null)
    const [ loading, setLoading ] = useState(true);

    const fetchPosts = async () => {
        setLoading(true)

        try {
            const response = await axios.get('http://localhost:3002/posts')
            setPosts(response.data.results);
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
            {posts && posts.map((post, index) => {
            return(
                <div key={index}>
                    <h2>Post</h2>
                    <p>amazing post</p>
                </div>
            )
        })}
        </>
    )
}

export default Posts