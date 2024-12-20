import axios from "axios";
import { useEffect, useState } from "react";

const Posts = () => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        setLoading(true);

        try {
            const response = await axios.get("http://localhost:3002/posts");
            setPosts(response.data.results);
            setLoading(false);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // useEffect pour fetch les posts au chargement de la page (il faut mettre la fonction fetchPosts dans le useEffect pour l'utiliser)
    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <>
            {/* Si loading est true, on affiche un message de chargement */}
            {loading ? (
                <p>Loading...</p>
            ) : (
                // Si loading est false, on affiche les posts
                posts &&
                posts.map((post, index) => {
                    return (
                        <div key={index}>
                            {/* On affiche le titre et le contenu du post (il faut afficher les objets que tu as mappé ici avec tes diffé&érentes propriétés) */}
                            <h2>{post.title}</h2>
                            {/* On affiche le titre du post */}
                            <p>{post.content}</p>
                            {/* On affiche le contenu du post */}
                        </div>
                    );
                })
            )}
        </>
    );
};

export default Posts;
