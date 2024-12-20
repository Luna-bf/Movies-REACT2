import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const NavBar = () => {
    
    const { isAuthenticated } = useAuth()

    return (
        <>
            <nav>
                <ul className=" flex place-content-around mb-8">
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/contact'><li>Contact</li></Link>
                    <Link to='/movies'><li>Movies</li></Link>
                    <Link to='/posts'><li>Posts</li></Link>
                    {isAuthenticated ? (
                        <>
                            <Link to='/profile'>Profile</Link>
                            <button>Logout</button>  
                        </>
                    )
                        : (
                            <>
                            <Link to='/register'>Register</Link>
                            <Link to='/login'>Login</Link>
                            </>
                        )
                    }
                </ul>
            </nav>
        </>
    )
}

export default NavBar