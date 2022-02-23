import { FETCH_MOVIES, SEARCH_MOVIE } from "../types/types";

export function fetchMovies() {
	
}

export function searchMovie(text) {
	return {
		type: SEARCH_MOVIE,
		text,
	}
}