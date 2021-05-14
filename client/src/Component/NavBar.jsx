import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { IoIosCreate } from "react-icons/io";
import "./Styles/NavBar.css";
import SearchBar from './SearchBar'
// import Autocomplete from 'react-autocomplete';


function NavBar({ countries }) {
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setName("");
    }

    return (
        <div className="navBar">
            <div className="home">
                <Link to="/home">
                    <h2>Henry Country</h2>
                </Link>
            </div>
            <div className="SearchBarFinal">
                <SearchBar name={name} handleChange={setName} countries={countries} />
                <form
                    onClick={e => handleSubmit(e)}
                >
                    <NavLink to={`/results/${name}`}>
                        <button name="name" type="submit">
                            <BiSearch id="icon" />
                        </button>
                    </NavLink>
                </form>
            </div>
            <div className="create">
                <Link to="/create">
                    <IoIosCreate className="iconCreate" />
                </Link>
            </div>
        </div >
    );
}

export default NavBar;
