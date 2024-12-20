import { useState, useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'


export const AuthContext = createContext(null)


export const AuthController = ({children}) => {
    let navigate = useNavigate()
    const [authError, setAuthError] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            setIsAuthenticated(true)
        }
        fetch(token, {
            method: GET,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                last_name: last_name,
                email: email,
                password: password,
            }),
        })
        .then((response) => {
            return response.json()
        })

        .then((data) => {
            localStorage.setItem('token', data.access)
            localStorage.setItem('token', data.refresh)
            console.log(localStorage)
        })
    })

    const loginUser = async (user) => {
        try{    
            const response = await axios.post(`http://localhost:3002/login`, user)
            if(response.status === 200) {
                localStorage.setItem('token', response.data)
                alert('Login successfull')
                navigate('/')
                setIsAuthenticated(true)
            }
        }
        catch(err){
            setAuthError(err.response.data.message)
        }
    }

    return(
        <AuthContext.Provider value={{ authError, loginUser, isAuthenticated}} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)