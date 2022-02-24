import {
    SearchForm,
    SearchHeader,
    SearchInput,
    SearchButton,
} from "../styles/stylesSearchBar";

import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, searchMovie } from "../state/actions/actions";

import { SEARCH_API } from "../api/config";

const SearchBar = () => {
    const dispatch = useDispatch();
	//!!!! NEED CHANGE
    const movieInput = useSelector((store: any) => {
        const { inputReducer } = store;
        return inputReducer.text;
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchMovie(e.target.value));
    };
	//!!!! NEED CHANGE
    const handleOnSubmit = (e: React.MouseEvent<HTMLButtonElement> | any) => {
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
