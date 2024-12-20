import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"

const Register = () => {

    const {registerUser, authError} = useContext(AuthContext)
    const [user, setUser] = useState({
        email : '',
        name : '',
        last_name : '',
        password : ''
    })
//trouver le token (???) dans le localstroage  et le decoder ??
    const handleSubmit = (e) => {
        e.preventDefault()
        registerUser(user)
    }

    return (
        <>
            <h1>Register page</h1>

            <form className="text-black" onSubmit={handleSubmit}  action="">
                <label htmlFor="">Email</label>
                <input className="bg-white" type="email" onChange={e => setUser({...user, email : e.target.value })} />
                <br />
                <label htmlFor="">Name</label>
                <input className="bg-white" type="text" onChange={e => setUser({...user, name : e.target.value })} />
                <br />
                <label htmlFor="">Last name</label>
                <input className="bg-white" type="text" onChange={e => setUser({...user, last_name : e.target.value })} />
                <br />
                <label htmlFor="">Password</label>
                <input className="bg-white" type="password" onChange={e => setUser({...user, password : e.target.value })} />
                <input type="submit" value='register'/>
            </form>
            {authError && alert(authError)}
        </>
    )
}

export default Register