import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Styles/FormActivity.css";
import validate from "../util/validate";
import axios from 'axios';

function FormActivity() {
    const country = useSelector((store) => store.countries);
    const [errors, setErrors] = useState({});

    const [state, setState] = useState({
        name: "",
        duration: "",
        difficulty: "",
        season: "",
        countries: [],
    });

    const ChangeInput = (e) => {
        if (e.target.name === "countries") {
            const arr = state[e.target.name];
            setState({
                ...state,
                [e.target.name]: arr.concat(e.target.value),
            });
        } else {
            setState({
                ...state,
                [e.target.name]: e.target.value,
            });
        }
    };

    const submitRecipe = (e) => {
        e.preventDefault();
        setErrors(validate(state));
        if (Object.entries(errors).length === 0) {
            axios.post('https://countries-pi.herokuapp.com/activity', state)
                .then(resp => console.log(resp))
                // .then(json => {
                //     alert(`${json.name} activity created`)
                // })
            setState({
                name: "",
                duration: "",
                difficulty: "",
                season: "",
                countries: [],
            })
        }
    };

    return (
        <div className="containerForm">
            <header>
                <h1 id="title">Add new activity</h1>
            </header>
            <form
                id="survey-form"
                className="form"
                onChange={(e) => ChangeInput(e)}
                onSubmit={(e) => submitRecipe(e)}
            >
                <div className="divForm">
                    <div>
                        <label className="text-label">Name</label>
                        <input
                            className={`${errors.name && "danger"} btm`}
                            type="text"
                            name="name"
                            defaultValue={state.name}
                        ></input>
                        {errors.name ? <p className="error">{errors.name}</p> : <p></p>}
                    </div>
                    <div>
                        <label className="text-label">Duration</label>
                        <input
                            className={`${errors.duration && "danger"} btm`}
                            type="text"
                            name="duration"
                            defaultValue={state.duration}
                        ></input>
                        {errors.duration ? <p className="error">{errors.duration}</p> : <p></p>}
                    </div>
                    <div>
                        <label className="text-label">Difficulty</label>
                        <select
                            className={`${errors.difficulty && "danger"} btm`}
                            name="difficulty"
                            defaultValue={state.difficulty}
                        >
                            <option value="1" >1</option>
                            <option value="2" >2</option>
                            <option value="3" >3</option>
                            <option value="4" >4</option>
                            <option value="5" >5</option>
                        </select>
                        {errors.difficulty ? <p className="error">{errors.difficulty}</p> : <p></p>}
                    </div>
                    <div>
                        <label className="text-label">Season</label>
                        <select
                            className={`${errors.season && "danger"} btm`}
                            name="season"
                            defaultValue={state.season}
                        >
                            <option value="Summer" >Summer</option>
                            <option value="Spring" >Spring</option>
                            <option value="Fall" >Fall</option>
                            <option value="Winter" >Winter</option>
                        </select>
                        {errors.season ? <p className="error">{errors.season}</p> : <p></p>}
                    </div>
                    <div className="divCat">
                        <label className="text-label">Countries</label>
                        <ul className="ulCat">
                            {country.map((c) => (
                                <li
                                    className="liCat"
                                    key={c.name}
                                >
                                    <input
                                        className="input"
                                        type="checkbox"
                                        name="countries"
                                        value={c.id}
                                    ></input>
                                    <label name={c}>{c.name}</label>
                                </li>
                            ))}
                        </ul>
                        {errors.countries ? (
                            <p className="error">{errors.countries}</p>
                        ) : (
                            <p></p>
                        )}
                    </div>
                </div>
                <button className="submitForm" type="submit">
                    Add activity
        </button>
            </form>
        </div>
    );
}

export default FormActivity;
