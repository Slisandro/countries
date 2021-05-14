const initialState = {
    countries: [],
    searchCountries: [],
    countryById: []
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_DATA":
            return {
                ...state,
                countries: action.payload,
            };
        case "SEARCH_DATA":
            return {
                ...state,
                searchCountries: action.payload,
            };
        case "ID_DATA":
            return {
                ...state,
                countryById: action.payload,
            };
        default:
            return state;
    }
}
