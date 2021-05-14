import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./Container/LandingPage.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "./Redux/actions";
import HomePage from "./Container/HomePage";
import NavBar from './Component/NavBar';
import CountryDetails from './Component/CountryDetails';
import ProductSearch from "./Container/ProductSearch";
import FormActivity from "./Component/FormActivity";

function App() {
  const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getRecipes())
    // eslint-disable-next-line
  }, []);

  const countries = useSelector((state) => state.countries);
  // console.log("app", countries)
  return (
    <Router>
      <div className="App">
        {/* <SearchBar countries={countries} /> */}
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/" render={() => ( <NavBar countries={countries} />)} />
        </Switch>
        <Route path="/home" exact component={HomePage} />
        <Route exact path="/create" component={FormActivity} />
        <Route
          exact
          path="/results/:name"
          render={({ match }) => <ProductSearch props={match.params} />}
        />
        <Route

          path="/search/:id"
          render={({ match }) => <CountryDetails id={match.params.id} />}
        />
      </div>
    </Router>
  );
}

export default App;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import './App.css';
// import { getRecipes } from "./Redux/actions";
// import { ReactSearchAutocomplete } from 'react-search-autocomplete'

// function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getRecipes())
//     // eslint-disable-next-line
//   }, []);

//   const countries = useSelector((state) => state.countries);

//   return (
//     <div className="App">
//       {countries.length === 0
//         ?
//         <div>Hola</div>
//         :
//         <header className="App-header">
//           <div style={{ width: 400 }}>
//             <ReactSearchAutocomplete
//               items={countries}pm s
//               maxResults={5}
//               autoFocus
//             />
//           </div>
//         </header>
//       }
//     </div>
//   )
// }

// export default App