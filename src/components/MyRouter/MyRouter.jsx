import { Routes, Route } from 'react-router-dom'
import App from '../../App'
import NavBar from '../NavBar/NavBar'
import Movies from '../pages/Movies'
import Posts from '../pages/Posts'
import Register from '../pages/Register'
import Login from '../pages/Login'

const MyRouter = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/contact' element={<h1>Contact page</h1>} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/posts' element={<Posts />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<h1>Error page not found</h1>} />
            </Routes>
        </>
    )
}

export default MyRouter