import styled from 'styled-components';

export const MovieContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const SearchHeader = styled.header`
    display: flex;
    justify-content: end;
    background-color: #0e384b;
    padding: 1rem;
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