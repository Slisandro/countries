import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCountries } from "../Redux/actions";
import ProductScreen from "./ProductScreen.jsx";
import Dropdown from "../Component/Dropdown";
import Sort from "../Component/Sort"

function ProductSearch({ props }) {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.searchCountries);

    useEffect(() => {
        dispatch(searchCountries(props.name));
        // eslint-disable-next-line
    }, [props.name]);

    const [selected, setSelected] = useState({ selected: "todos" });
    const [products, setProducts] = useState([]);

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
        if (name === 'asc') {
            const asc = [...products].sort((a, b) => a.name < b.name ? 1 : -1)
            setProducts(asc)

        }
        else {
            const des = [...products].sort((a, b) => a.name > b.name ? 1 : -1)
            setProducts(des)
        }

    }

    return (
        <div className="container">
            <>
                <div className="hola">
                    <Dropdown onChange={(value) => setSelected({ selected: value })} />
                    <Sort onClick={name => handleSort(name)} />
                </div>
                <ProductScreen props={products} />
            </>
        </div>
    );
}

export default ProductSearch;
