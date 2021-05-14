import "./Styles/Dropdown.css";

function Dropdown(props) {
    return (
        <div className="select">
            <select onChange={(e) => props.onChange(e.target.value)} >
                <option default value="todos" >Select a region...</option>
                <option value="Africa" >AFRICA</option>
                <option value="Americas" >AMERICAS</option>
                <option value="Asia" >ASIA</option>
                <option value="Europe" >EUROPE</option>
                <option value="Oceania" >OCEANIA</option>
                <option value="Polar" >POLAR</option>
            </select>
        </div>
    )
}


export default Dropdown;