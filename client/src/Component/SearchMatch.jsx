import React from "react";

const SearchMatch = ({ results, name, updateField, handleClick }) => {
  var updateText = text => {
    updateField("name", text);
  };

  var renderResults = results.map(({ position, name }, index) => {
    return (
      <SearchPreview
        key={index}
        updateText={updateText}
        index={index}
        position={position}
        name={name}
        handleClick={handleClick}
      />
    );
  });

  return (
    <div className="auto">
      <input
        className="search-bar"
        placeholder="Search"
        value={name}
        onChange={e => updateField("name", e.target.value)}
      />

      {results.length > 0 ? (
        <div className="search-results">{renderResults}</div>
      ) : null}
    </div>
  );
};

const SearchPreview = ({ name, index, updateText, handleClick }) => {
  return (
    <button
      value={name}
      onClick={(e) => {
        e.preventDefault()
        updateText(e.target.value)
        handleClick(e.target.value)
      }}
      className={`search-preview ${index === 0 ? "start" : ""}`}
    >
      {name}
    </button>
  );
};

export default SearchMatch;