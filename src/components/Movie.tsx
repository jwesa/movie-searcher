import {
    MovieCard,
    MovieImage,
    MovieInfo,
    MovieTitle,
    AvgVote,
    Overview,
} from "../styles/stylesMovie";

import { IMG_API } from "../api/config";

import { MovieProps } from "../interfaces/propsInterfaces";

const Movie = ({
    release_date,
    title,
    vote_average,
    overview,
    poster_path,
}: MovieProps) => {

    const setAvgVoteClass = (vote: number): string => {
        if (vote >= 7.5) {
            return "green";
        } else if (vote >= 6) {
            return "yellow";
        } else {
            return "red";
        }
    };

    const voteFormatted =
        vote_average === 0
            ? "N/A"
            : null || String(vote_average).length === 3
            ? vote_average
            : vote_average + ".0";

    return (
        <MovieCard>
            <MovieImage
                src={
                    poster_path
                        ? IMG_API + poster_path
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/660px-No-Image-Placeholder.svg.png?20200912122019"
                }
                alt={title}
            />
            <MovieInfo>
                <MovieTitle>
                    <span className="year">
                        {release_date ? release_date.slice(0, 4) : "N/A"}
                    </span>
                    <br />
                    {title}
                </MovieTitle>
                <AvgVote className={setAvgVoteClass(vote_average)}>
                    {voteFormatted}
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
