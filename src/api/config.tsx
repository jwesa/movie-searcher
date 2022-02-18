const API_KEY: string = "36286268b63bfd46c8e9aef14afc5663";

export const POPULAR_API: string = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`;
export const SEARCH_API: string = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
export const IMG_API: string = "https://image.tmdb.org/t/p/w500";
