import React, { useEffect, useState } from "react";
import Activite from "./Activites/Activite";
import Notfication from "./Notification/Notfication";
import Total from "./TotalRemise/Total";
import "./App.css";

const App = () => {
  const [data, setdata] = useState([
    {
      id: 1,
      name: "Raquettes à neige",
      prix: 300,
      selectionné: true,
    },
    {
      id: 2,
      name: "detente et bien etre",
      prix: 400,
      selectionné: false,
    },
    {
      id: 3,
      name: "patrimoine et  culture",
      prix: 250,
      selectionné: false,
    },
    {
      id: 4,
      name: "séjour en famille ",
      prix: 660,
      selectionné: false,
    },
  ]);

  const trans = (obj) => {
    data.map((ele) => obj.id === ele.id && ele.selectionné === true?ele.selectionné = false:obj.id === ele.id && ele.selectionné === false? ele.selectionné = true:null)
    setdata([...data]);
  };

  const [index, setindex] = useState(0);
  useEffect(
    () =>
      setindex(
        data.reduce((total, obj) => total + (obj.selectionné ? 1 : 0), 0)
      ),
    [data]
  );

  return (
    <div className="main">
      <div className="header">
        <h2>Activites touristique</h2>
      </div>
      <div className="noti">
        <Notfication noti={index} />
      </div>
      <Activite data={data} t={trans} />

      <Total data={data} />
    </div>
  );
};

export default App;
