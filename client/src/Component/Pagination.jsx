import React from "react";
import './Styles/Pagination.css';

export const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="navPag">
      <ul className="pagination">
        {pageNumbers.map((num) => (
          <li key={num} className="page-item">
            <button
              onClick={(e) => paginate(e, num)}
              className="page-link"
            >
              {num}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
