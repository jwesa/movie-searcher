import styled from "styled-components";

export const MovieCard = styled.div`
    position: relative;
    width: 250px;
    margin: 1rem;
    overflow: auto;
    background-color: #0e384b;
    border-radius: 3px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);

    &:hover .over {
        transform: translateY(0%);
    }

    .green {
        color: #25db2b;
    }
    .yellow {
        color: #ffcf40;
    }
    .red {
        color: #ff2e2e;
    }
`;

export const MovieImage = styled.img`
	height: 375px;
    width: 100%;
`;

export const MovieInfo = styled.div`
    display: flex;
    justify-content: start;
    padding: 0.3rem 0.5rem 0.5rem 1rem;
`;

export const MovieTitle = styled.h3`
    font-weight: 500;
    margin: 0;

	.year {
		font-weight: bold;
	}
`;

export const AvgVote = styled.span`
    position: absolute;
    top: -1px;
    right: -1px;
    padding: 4px;
    font-weight: 500;
    background-color: #080a3f;
    border-bottom-left-radius: 15px;
    opacity: 0.95;
`;

export const Overview = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    max-height: 100%;
    padding: 0 1rem 1rem 1rem;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    box-shadow: 0px -2px 10px 2px rgba(34, 60, 80, 0.45);
    overflow: auto;
    background-color: #f3f3f3;
    color: #0e384b;
    opacity: 0.95;
    transform: translateY(105%);
    transition: transform 0.3s ease-in-out;
`;
