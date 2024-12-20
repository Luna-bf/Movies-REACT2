import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav>
                <ul className="flex place-content-around mb-8">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/posts">
                        {/* TODO: Ajouter posts dans ton router */}
                        <li>Posts</li>
                    </Link>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
