import { Link } from 'react-router-dom'
import { Posts } from './'

const NavBar = () => {
    return (
        <>
            <nav>
                <ul className='flex place-content-around mb-8'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/posts'><li>Posts</li></Link>
                </ul>
            </nav>
        </>
    )
}

export default NavBar