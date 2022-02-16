import styled from "styled-components";

export const MovieContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .no-movie,
    .loading {
        padding: 1rem;
        font-size: 3rem;
    }
`;

export const SearchHeader = styled.header`
    display: flex;
    justify-content: end;
    background-color: #0e384b;
    padding: 0.7rem;
    margin-bottom: 0.5rem;
    box-shadow: 0px 6px 9px 2px rgba(0, 0, 0, 0.25);
`;

export const SearchForm = styled.form`
    position: relative;
`;

export const SearchInput = styled.input`
    padding: 0.5rem 1.5rem;
    font-family: inherit;
    font-size: 1.2rem;
    outline: none;
    color: #f3f3f3;
    background-color: transparent;
    border: 3px solid #01263f;
    border-radius: 50px;

    &::placeholder {
        color: #b8b8b8;
    }
`;

export const SearchButton = styled.button`
    position: absolute;
    top: 0px;
    right: 0px;
    height: 50.5px;
    width: 2em;
    font-size: 2em;
    color: #01263f;
    background-color: #f3f3f3;
    border: 3px solid #01263f;
    border-radius: 50px;
`;
