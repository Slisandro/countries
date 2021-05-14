import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductScreen from "./ProductScreen.jsx";
import Dropdown from "../Component/Dropdown";
import Sort from "../Component/Sort";
import "./Styles/HomePage.css";

function HomePage() {
  const countries = useSelector((state) => state.countries);

  const [selected, setSelected] = useState({ selected: "todos" }); // name del cont a filtrar
  const [products, setProducts] = useState([]); // contiene los countries filtrados

  useEffect(() => {
    let filteredProducts = countries;

    if (selected.selected === "todos") {
      setProducts(countries);
    }
    else {
      filteredProducts = filteredProducts.filter(product =>
        product.region === selected.selected
      )
      setProducts(filteredProducts)
    }
  }, [countries, selected])

  function handleSort(name) {
    console.log("NAME" ,name)
    if (name === 'asc') {
      const asc = [...products].sort((a, b) => {
        // a.area = a.area || 1;
        // a.population = a.population || 0;
        // b.area = b.area || 1;
        // b.population = b.population || 0;
        
        return (Number(a.population) || 1 ) < (Number(b.population) || 1 ) ? -1 : 1
      })
      setProducts(asc)
    }
    else {
      // const des = [...products].sort((a, b) => a.name > b.name ? 1 : -1)
      // setProducts(des)
      const des = [...products].sort((a, b) => {
        // a.area = a.area || 1;
        // a.population = a.population || 0;
        // b.area = b.area || 1;
        // b.population = b.population || 0;
      
        return (Number(a.population) || 1) > (Number(b.population) || 1) ? 1 : -1
      })
      setProducts(des)
    }

  }

  return (
    <div className="container">
        <div className="home">
          <Dropdown onChange={(value) => setSelected({ selected: value })} />
          <Sort onClick={name => handleSort(name)} />
        </div>
        <ProductScreen props={products} />
    </div>
  );
}

export default HomePage;
