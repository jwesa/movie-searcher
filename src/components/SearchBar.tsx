import {
    SearchForm,
    SearchHeader,
    SearchInput,
    SearchButton,
} from "../styles/stylesSearchBar";

import { SEARCH_API } from "../config/config";

import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, searchMovie } from "../app/actions/actions";
import { State } from "../app/reducers/rootReducer";

const SearchBar = () => {
    const dispatch = useDispatch();

    const movieInput = useSelector((state: State) => {
        const { inputReducer } = state;
        return inputReducer.text;
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchMovie(e.target.value));
    };

    const handleOnSubmit = (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (movieInput) {
            dispatch(fetchMovies(SEARCH_API + movieInput));
            dispatch(searchMovie(""));
        }
    };

    return (
        <SearchHeader>
            <SearchForm onSubmit={handleOnSubmit}>
                <SearchInput
                    type="search"
                    placeholder="Search..."
                    value={movieInput}
                    onChange={handleOnChange}
                />
                <SearchButton>
                    <i className="fa fa-search"></i>
                </SearchButton>
            </SearchForm>
        </SearchHeader>
    );
};

export default SearchBar;
