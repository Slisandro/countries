import SearchMatch from "./SearchMatch";
import "./Styles/SearchMatch.css";

import React, { useEffect, useState } from "react";

function SearchBar({ countries, name, handleChange }) {
    const [state, setState] = useState({
        // name: "",
        results: [],
        update: true
    })

    useEffect(() => {
        if (state.update) {
            return onSearch(name)
        }
        setState({
            ...state,
            update: true
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name])

    const matchName = (nombre, str) => {
        var keyLen = str.length;
        nombre = nombre.toLowerCase().substring(0, keyLen);
        if (str === "") return false;
        return nombre === str.toLowerCase();
    };

    const onSearch = text => {
        setState({
            ...state,
            results: countries.slice().filter(item => true === matchName(item.name, text))
        });
    };

    const handleClick = (value) => {
        handleChange(value)
        setState({
            ...state,
            results: [],
            update: false
        })
    }

    const updateField = (name, value) => {
        if (name === "name") {
            handleChange(value);
        } else {
            setState({
                [name]: value
            })
        }

    };

    return (
        <div className="searchBarContainer">
            <SearchMatch
                results={state.results}
                name={name}
                updateField={updateField}
                handleClick={handleClick}
            />
        </div>
    );
}


export default SearchBar;