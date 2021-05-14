import axios from 'axios';

export function getRecipes() {
    return (dispatch) =>
        axios.get('http://localhost:3001/countries')
            .then((json) => {
                dispatch({
                    type: "GET_DATA",
                    payload: json.data,
                });
            });
}

export function searchCountries(name) {
    return (dispatch) =>
        axios.get(`http://localhost:3001/countries?name=${name}`)
            .then((json) => {
                dispatch({
                    type: "SEARCH_DATA",
                    payload: json.data,
                });
            });
}

export function getCountryById(id) {
    return (dispatch) =>
        axios.get(`http://localhost:3001/countries/${id}`)
            .then((json) => {
                dispatch({
                    type: "ID_DATA",
                    payload: json.data,
                });
            });
}