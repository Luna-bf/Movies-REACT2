import axios from 'axios'
import {useState, useEffect} from 'react'

const Posts = () => {

    const fetchPosts = async () => {

        const response = await axios.get('http://localhost:3002/posts')
                
    }
}