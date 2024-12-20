import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// suppression des imports inutiles

import MyRouter from "./components/MyRouter/MyRouter";
import { MovieController } from "./components/context/MovieContext";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <MovieController>
            <MyRouter />
        </MovieController>
    </StrictMode>
);
