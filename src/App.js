import React, { Fragment, useState } from "react";
import Activites from "./component/Activites/Activites";
import Detail from "./component/Detail/Detail";
import "./App.css";
const App = () => {
  //data
  const [data, setData] = useState([
    {
      id: 1,
      name: "Raquettes à neige",
      prix: 300,
      qte:1,
      img: "https://cdn-icons-png.flaticon.com/512/2200/2200326.png",
    },
    {
      id: 2,
      name: "detente et bien etre",
      prix: 400,
      qte:1,
      img: "https://cdn-icons-png.flaticon.com/512/2248/2248315.png",
    },
    {
      id: 3,
      name: "patrimoine et culture",
      prix: 250,
      qte:1,
      img: "https://cdn-icons-png.flaticon.com/512/2028/2028382.png",
    },
    {
      id: 4,
      name: "séjour en famille",
      prix: 660,
      qte:1,
      img: "https://cdn-icons-png.flaticon.com/512/3020/3020920.png",
    },
  ]);

  const [disponibleSelected, setdisSelected] = useState([]);
  const SendDonne = (obj) => setdisSelected([...obj]);


  return (
    <div className="main0">
      <div className="main">
        <div>
          <h2>Sélectionnez vos activités</h2>
        </div>
        <Activites data={data} SendDonne={SendDonne} />
      </div>
      <div className="main1">
        <Detail dis={disponibleSelected}/>
      </div>
    </div>
  );
};

export default App;
