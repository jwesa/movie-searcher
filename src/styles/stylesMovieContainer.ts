import styled from "styled-components";

export const MovieWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .no-movie,
    .loading {
        padding: 1rem;
        font-size: 3rem;
    }
`;
