import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TRENDING_API, SEARCH_API } from "./api/config";
import Movie from "./components/Movie";
import {
    MovieContainer,
    SearchHeader,
    SearchInput,
    SearchButton,
    SearchForm,
} from "./styles/stylesApp";
import "./App.css";

import { MovieRenderProps } from "./interfaces/interfaces";
import { searchMovie } from "./redux/actions/actions";

function App() {
    const [loading, setLoading] = useState<boolean>(false);
    const [movies, setMovies] = useState<[]>([]);

    const movieInput = useSelector((store: any) => {
        //! Need to change ANY type later
        const { inputReducer } = store;
        return inputReducer.text;
    });
    const dispatch = useDispatch();

    const fetchMovies = (API: string): void => {
        setLoading(true);
        fetch(API)
            .then((res) => {
                return res.json();
            })
            .catch((e) => {
                setLoading(false);
                console.error("Error occured:", e);
            })
            .then((data) => {
                console.log(data);
                setMovies(data.results);
                setLoading(false);
            });
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchMovie(e.target.value));
    };

    const handleOnSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (movieInput) {
            fetchMovies(SEARCH_API + movieInput);
            dispatch(searchMovie(""));
        }
    };

    useEffect(() => {
        fetchMovies(TRENDING_API);
    }, []);

    return (
        <div>
            <SearchHeader>
                <SearchForm onSubmit={handleOnSubmit}>
                    <SearchInput
                        type="search"
                        placeholder="Search..."
                        value={movieInput}
                        onChange={handleOnChange}
                    />
                    <SearchButton>
                        <i className="fa fa-search"></i>
                    </SearchButton>
                </SearchForm>
            </SearchHeader>
            <MovieContainer>
                {loading === true ? (
                    <div className="loading">Loading...</div>
                ) : movies.length === 0 ? (
                    <div className="no-movie">Movie not found</div>
                ) : (
                    movies.map((movie: MovieRenderProps) => (
                        <Movie
                            key={movie.id}
                            release_date={movie.release_date}
                            title={movie.title}
                            poster_path={movie.poster_path}
                            vote_average={movie.vote_average}
                            overview={movie.overview}
                        />
                    ))
                )}
            </MovieContainer>
        </div>
    );
}

export default App;
