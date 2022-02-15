import React from "react";
import { MovieCard, MovieImage, MovieInfo, MovieTitle, AvgVote, Overview } from "../styles/stylesMovie";

const IMG_API = "https://image.tmdb.org/t/p/w500";

const Movie = ({
    release_date,
    title,
    vote_average,
    overview,
    poster_path,
}) => {
    return (
        <MovieCard>
            <MovieImage src={IMG_API + poster_path} alt={title} />
            <MovieInfo>
                <MovieTitle>{title}</MovieTitle>
                <AvgVote>
                    {String(vote_average).length === 3
                        ? vote_average
                        : vote_average + ".0"}
                </AvgVote>
            </MovieInfo>
            <Overview className="over">
                <h2>Storyline:</h2>
                <p>{overview}</p>
            </Overview>
        </MovieCard>
    );
};

export default Movie;
