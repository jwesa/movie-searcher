import { MovieWrapper } from "../styles/stylesMovieContainer";

import Movie from "./Movie";

import { useSelector } from "react-redux";
import { MovieRenderProps } from "../interfaces/propsInterfaces";
import { State } from "../state/reducers/rootReducer";

const MovieContainer = () => {
    const movies = useSelector((state: State) => {
        const { fetchMoviesReducer } = state;
        return fetchMoviesReducer.movies;
    });

    const loading = useSelector((state: State) => {
        const { loadingReducer } = state;
        return loadingReducer.loading;
    });

    return (
        <MovieWrapper>
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
        </MovieWrapper>
    );
};

export default MovieContainer;
