import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import { API_KEY } from "./api/config";
import {
    MovieContainer,
    SearchHeader,
    SearchInput,
    SearchButton,
    SearchForm,
} from "./styles/stylesApp";

import "./App.css";

const POPULAR_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

function App() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    const fetchMovies = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data.results);
            });
    };

    useEffect(() => {
        fetchMovies(POPULAR_API);
    }, []);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (search) {
            fetchMovies(SEARCH_API+search);
            setSearch("");
        }
    };

    const handleOnChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div>
            <SearchHeader>
                <SearchForm onSubmit={handleOnSubmit}>
                    <SearchInput
                        type="search"
                        placeholder="Search..."
                        value={search}
                        onChange={handleOnChange}
                    />
                    <SearchButton onSubmit={handleOnSubmit}>
                        <i class="fa fa-search"></i>
                    </SearchButton>
                </SearchForm>
            </SearchHeader>
            <MovieContainer>
                {movies.map((movie) => (
                    <Movie key={movie.id} {...movie} />
                    // spread чтобы не передавать каждый проп отдельно: poster = { movie.poster_path } title = { movie.title } и так далее
                ))}
            </MovieContainer>
        </div>
    );
}

export default App;
