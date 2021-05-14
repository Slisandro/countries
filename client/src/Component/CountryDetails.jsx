import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryById } from "../Redux/actions";
import { converter } from "../util/number";
import "./Styles/CountryDetails.css";

function CountryDetails({ id }) {
    const dispatch = useDispatch();

    const country = useSelector((store) => store.countryById);
    const [state, setState] = useState(false);

    useEffect(() => {
        dispatch(getCountryById(id));
        setState(true);
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {
                !state
                    ?
                    <div>Loading...</div>
                    :
                    Object.keys(country).length === 0 ? <div>Loading...</div> :
                        <>
                            <div className="detailsContainer">
                                <h1>{country.name} ({country.id})</h1>
                                <div className="details">
                                    <figure className="image">
                                        <img src={country.image} alt={country.title} />
                                    </figure>
                                    <div className="text">
                                        <div>
                                            <h2>Capital</h2>
                                            <h3>{country.capital}</h3>
                                        </div>
                                        <div>
                                            <h2>Region</h2>
                                            <h3>{country.region}</h3>
                                        </div>
                                        <div>
                                            <h2>Subregion</h2>
                                            <h3>{country.subregion}</h3>
                                        </div>
                                        <div>
                                            <h2>Population</h2>
                                            <h3>{converter(country.population)}</h3>
                                        </div>
                                        <div>
                                            <h2>Area</h2>
                                            <h3>{converter(country.area)} km²</h3>
                                        </div>
                                    </div>
                                    <div className="categories">
                                        <h2>Activities</h2>
                                        {country.activities.length === 0
                                            ?
                                            <div>
                                                <p>There are no activities in this country yet</p>
                                            </div>
                                            :
                                            <>
                                                <ul>
                                                    {
                                                        country.activities.map((cat) => (
                                                            <li key={cat.name}>
                                                                <p>{cat.name}</p>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </>
            }
        </>
    );
}

export default CountryDetails;
