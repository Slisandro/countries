import React, {useEffect, useState} from "react";
import Card from "../Component/Card/Card";
import './Styles/ProductScreen.css';
import { Pagination } from "../Component/Pagination";

function ProductScreen({props}) {
  const [page, setPage] = useState(1);
  const [countriesPerPage] = useState(9);

  useEffect(() => {
    setPage(1)
  }, [props])

  let indexLastPage = page * countriesPerPage; 
  let indexFirtsPage = indexLastPage - countriesPerPage;
  let currentPage = props.slice(indexFirtsPage, indexLastPage); 
  // copia del array q recibo como props con los elementos de la pag actual

  function paginate(e, num) {
    e.preventDefault();
    setPage(num);
  }

  return (
    <div className="ff">
      <Pagination
              countriesPerPage={countriesPerPage}
              totalCountries={props.length} 
              paginate={paginate}
            />
      <div className="cardsContainer">
        {currentPage.map((prod) => (
          <Card key={prod.id} props={prod} />
        ))}
      </div>
    </div>
  );
}

export default ProductScreen;
