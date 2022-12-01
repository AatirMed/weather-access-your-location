import React, { Fragment} from "react";
import { Link, Routes, Route } from "react-router-dom";
import Exercice01 from './component/Exercice01';
import Exercice02 from "./component/Exercice02";
import './App.css';

const App = () => {


  return (
    <Fragment>

      <nav>
        <Link to='/Exercice01'>Exercice 01</Link>
        <Link to='/Exercice02'>Exercice 02</Link>
      </nav>

      <Routes>
        <Route exact path="/Exercice01" element={<Exercice01 />} />
        <Route path="/Exercice02" element={<Exercice02/>} />
        <Route path="*" element={<Exercice01 />} />
      </Routes>

    </Fragment>

  );
};

export default App;
