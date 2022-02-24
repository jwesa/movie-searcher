export interface MovieProps {
    release_date: string;
    title: string;
    vote_average: number;
    overview: string;
    poster_path: string;
}

export interface MovieRenderProps extends MovieProps {
	id: number;
}
