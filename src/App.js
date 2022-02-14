import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import { API_KEY } from "./api/config";

import "./App.css";

const POPULAR_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(POPULAR_API)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data.results);
            });
    }, []);

    return (
        <div>
            {movies.map((movie) => (
				<Movie key={movie.id} {...movie} /> 
				// spread чтобы не передавать каждый проп отдельно: poster = { movie.poster_path } title = { movie.title } и так далее
            ))}
        </div>
    );
}

export default App;
