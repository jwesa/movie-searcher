export interface fetchStateInterface {
    movies: {
        id: number;
        release_date: string;
        title: string;
        vote_average: number;
        overview: string;
        poster_path: string;
    }[];
}

export interface loadingStateInterface {
    loading: boolean;
}

export interface inputInterface {
    text: string;
}
