import React, { Fragment, useState } from "react";

const Activites = (props) => {
  const [disponible, setdisponible] = useState([...props.data]);
  const [disponibleSelected, setdisSelected] = useState([]);
  const [oneSelect, setoneSelect] = useState();
  const [oneSelect1, setoneSelect1] = useState();

  // select change 0
  const change = (event) => setoneSelect(event.target.value);
  // select change 1
  const change1 = (event) => setoneSelect1(event.target.value);

  const Add_one = () => {
    setdisponible(
      [...disponible.filter((ele) => ele.name !== oneSelect)].sort(
        (a, b) => a.id - b.id
      )
    );
    setdisSelected(
      [
        ...disponibleSelected,
        ...disponible.filter((ele) => ele.name === oneSelect),
      ].sort((a, b) => a.id - b.id)
    );
  };

  const Add_all = () => {
    setdisponible([]);
    setdisSelected(
      [...disponibleSelected, ...disponible].sort((a, b) => a.id - b.id)
    );
  };

  const Remove_one = () => {
    setdisponible(
      [
        ...disponible,
        ...disponibleSelected.filter((ele) => ele.name === oneSelect1),
      ].sort((a, b) => a.id - b.id)
  );

    setdisSelected(
      [...disponibleSelected.filter((ele) => ele.name !== oneSelect1)].sort(
        (a, b) => a.id - b.id
      )
    );
  };

  const Remove_all = () => {
    setdisponible(
      [...disponibleSelected, ...disponible].sort((a, b) => a.id - b.id)
    );
    setdisSelected([]);
  };

  return (
    <Fragment>
      <div className="items">
        <div className="disponibles_two">
          <h3>Activités disponibles </h3>
          <select className="disponibles" multiple onClick={change}>
            {disponible.map((ele) => (
              <option key={ele.id} className="option_select" value={ele.name}>
                {ele.name}
              </option>
            ))}
          </select>
        </div>

        <div className="btn">
          <button className="btnOne" onClick={Add_one}>
            +
          </button>
          <button className="btnOne" onClick={Add_all}>
            +++
          </button>
          <button className="btnOne" onClick={Remove_one}>
            -
          </button>
          <button className="btnOne" onClick={Remove_all}>
            ---
          </button>
        </div>

        <div className="disponibles_two">
          <h3>Activités Selected</h3>
          <select className="disponibles" multiple onClick={change1}>
            {disponibleSelected.map((ele) => (
              <option key={ele.id} className="option_select" value={ele.name}>
                {ele.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <button className="btnOne1" onClick={()=>props.SendDonne([...disponibleSelected])}>Afficher detail & totale</button>
      </div>
    </Fragment>
  );
};

export default Activites;
