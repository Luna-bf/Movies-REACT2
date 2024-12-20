import { Routes, Route, BrowserRouter } from "react-router-dom";
import { App } from "../../App";
import { MovieDetails } from "../MovieDetails/MovieDetails";
//import { Posts } from '../pages/Posts'

const MyRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/movie/:movieID" element={<MovieDetails />} />
                    <Route path="*" element={<h1>An error has occured.</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default MyRouter;
