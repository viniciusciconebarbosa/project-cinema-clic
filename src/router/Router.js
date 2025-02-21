import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { MovieDetailsPage } from "../pages/MovieDetails/MovieDetailsPage";
import { TVDetailsPage } from "../pages/TVDetails/TVDetailsPage";
import { MovieProvider } from '../context/MovieContext';

export const Router = () => {
    return (
        <MovieProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/details/movie/:id" element={<MovieDetailsPage />} />
                    <Route path="/details/tv/:id" element={<TVDetailsPage/>} />
                </Routes>
            </BrowserRouter>
        </MovieProvider>
    );
}
