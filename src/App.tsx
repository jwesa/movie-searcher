import "./App.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./redux/actions/actions";

import { TRENDING_API } from "./api/config";
import SearchBar from "./components/SearchBar";
import MovieContainer from "./components/MovieContainer";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies(TRENDING_API));
    }, []);

    return (
        <div>
            <SearchBar />
            <MovieContainer />
        </div>
    );
}

export default App;
