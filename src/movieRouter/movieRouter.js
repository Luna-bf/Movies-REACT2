import { Router } from "express";
import { movies } from "../data/moviesData.js";

const movieRouter = Router();

movieRouter.get("/movies", (req, res) => {
    return res.status(200).json(movies);
});

movieRouter.get("/movie/:id", (req, res) => {
    let { id } = req.params;
    try {
        const movieByID = movies.find((movie) => movie.id === Number(id));
        return res.json(movieByID);
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

movieRouter.post("/movie", (req, res) => {
    let { title, genre } = req.body;
    try {
        if ((!title, !genre)) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const newMovie = {
            id: movies.length + 1,
            title,
            genre,
        };
        movies.push(newMovie);
        return res.status(201).json(movies);
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

movieRouter.put("/movie/:id", (req, res) => {
    let { id } = req.params;
    let { title, genre } = req.body;
    let movieByID = movies.find((movie) => movie.id === parseInt(id));
    console.log(movieByID);
    movieByID.title = title || movieByID.title;
    movieByID.genre = genre;
    return res.status(201).json(movieByID);
});

movieRouter.delete("/movie/:id", (req, res) => {
    let { id } = req.params;
    const movieByID = movies.find((movie) => movie.id === parseInt(id));
    const index = movies.indexOf(movieByID);
    movies.splice(index, 1);
    return res.status(203).json({ message: "Movie has been deleted" });
});

export default movieRouter;
