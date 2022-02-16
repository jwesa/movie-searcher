import styled from "styled-components";

export const MovieContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const SearchHeader = styled.header`
    display: flex;
    justify-content: end;
    background-color: #0e384b;
    padding: 1rem;
	margin-bottom: 0.5rem;
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
