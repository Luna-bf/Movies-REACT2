import axios from 'axios'
import { useContext } from 'react'
import {useState, useEffect, createContext} from 'react'
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
    })

    const registerUser = async (user) => {
        console.log(user)
        try{    
         const response = await axios.post(`http://localhost:${PORT}/register`, user)
         if(response.status === 201){
            alert(response.data.message)
            navigate('/login')
         }
        }
        catch(err){
            setAuthError(err.response.data.message)
        }
    }

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
        <AuthContext.Provider  value={{registerUser, authError, loginUser, isAuthenticated}} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)