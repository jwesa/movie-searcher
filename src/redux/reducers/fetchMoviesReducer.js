import { FETCH_MOVIES } from "../types/types";

const initialState = {
    movies: [],
};

export const fetchMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            const movies = action.data.map((movie) => {
                return {
                    id: movie.id,
                    vote_average: movie.vote_average,
                    title: movie.title,
                    release_date: movie.release_date,
                    poster_path: movie.poster_path,
                    overview: movie.overview,
                };
            });
            return {
                ...state,
                movies: movies,
            };
        default:
            return state;
    }
};
