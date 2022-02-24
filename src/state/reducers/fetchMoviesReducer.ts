import { FETCH_MOVIES } from "../types/types";
import { fetchActionInterface } from './../../interfaces/actionInterfaces';
import { fetchStateInterface } from "./../../interfaces/stateInterfaces";

interface movieInterface {
    id: number;
    release_date: string;
    title: string;
    vote_average: number;
    overview: string;
    poster_path: string;
}

const initialState: fetchStateInterface = {
    movies: [],
};

export const fetchMoviesReducer = (
    state = initialState,
    action: fetchActionInterface
) => {
    switch (action.type) {
        case FETCH_MOVIES:
            const movies = action.data.map((movie: movieInterface) => {
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
