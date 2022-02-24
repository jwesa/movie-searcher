import React, { useEffect } from "react";
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
import { fetchMovies, searchMovie } from "./redux/actions/actions";

function App() {

    //! Need to change ANY type later

    const dispatch = useDispatch();

    const movies = useSelector((store: any) => {
        const { fetchMoviesReducer } = store;
        return fetchMoviesReducer.movies;
    });

    const movieInput = useSelector((store: any) => {
        const { inputReducer } = store;
        return inputReducer.text;
    });

    const loading = useSelector((store: any) => {
        const { loadingReducer } = store;
        return loadingReducer.loading;
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchMovie(e.target.value));
    };

    const handleOnSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (movieInput) {
            dispatch(fetchMovies(SEARCH_API + movieInput));
            dispatch(searchMovie(""));
        }
    };

    useEffect(() => {
        dispatch(fetchMovies(TRENDING_API));
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
