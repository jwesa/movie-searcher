import React from "react";
import styled from "styled-components";

const MovieCard = styled.div``;

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
            <img src={IMG_API + poster_path} alt={title} />
        </MovieCard>
    );
};

export default Movie;
