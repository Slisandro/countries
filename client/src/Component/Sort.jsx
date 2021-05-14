import "./Styles/Sort.css";

function Sort(props) {
    return (
        <div className="buttons">
            <button name='asc' onClick={e => props.onClick(e.target.name)} >HIGHER</button>
            <button name='des' onClick={e => props.onClick(e.target.name)} >LOWER</button>
        </div>
    )
}

export default Sort;