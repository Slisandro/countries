import "./Styles/LandingPage.css";
import { NavLink } from "react-router-dom";

function LandingPage() {
    return (
        <div className="landingPage">
            <div className="childLP">
                <h2>Henry Country</h2>
                <NavLink className="" to="/home">
                    <button className="button" type="submit">Enter</button>
                </NavLink>
            </div>
        </div>
    );
}

export default LandingPage;
