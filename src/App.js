import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import { API_KEY } from "./api/config";
import styled from "styled-components";

import "./App.css";

const MovieContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const SearchHeader = styled.header`
    display: flex;
    justify-content: end;
    background-color: #0e384b;
    padding: 1rem;
`;

const SearchInput = styled.input`
    padding: 0.5rem 1.5rem;
    font-family: inherit;
    font-size: 1.2rem;
    outline: none;
    color: #f3f3f3;
    background-color: transparent;
    border: 3px solid #01263f;
    border-radius: 50px;

    &::placeholder {
        color: #b8b8b8;
    }
`;

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
            <SearchHeader>
                <SearchInput type="search" placeholder="Search..." />
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
