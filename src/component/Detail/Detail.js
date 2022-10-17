import React, { Fragment, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Total from "./Total";

const Detail = (props) => {
  //useChange
  const [aff, setaff] = useState([...props.dis]);
  const [total, setTotal] = useState(0);

  // change Qte
  const HandChange = (event) => {
    const x = [...props.dis];
    x.map((ele) => {
      if (ele.name === event.target.getAttribute("name")) {
        ele.qte = parseInt(event.target.value);
      }
    });
    setaff(x);
  };

  //Remove
  const del = (id) => setaff([...aff.filter((ele) => ele.id !== id)]);

  //   useEffect
  useEffect(() => setaff([...props.dis]), [props.dis]);
  useEffect(
    () => setTotal(aff.reduce((total, obj) => total + obj.prix * obj.qte, 0)),
    [aff]
  );

  return (
    <Fragment>
      <h3 className="choix">Votre Choix</h3>
      <table>
        <thead>
          <tr>
            <th>image</th>
            <th>nom</th>
            <th>prix</th>
            <th>nomber de personne</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {aff.map((ele) => {
            return (
              <tr key={nanoid()}>
                <td>
                  <img src={ele.img} />
                </td>
                <td>{ele.name}</td>
                <td>{ele.prix}</td>
                <td>
                  <input
                    type="number"
                    name={ele.name}
                    value={ele.qte}
                    onChange={HandChange}
                  />
                </td>
                <td>
                  <button className="remove" onClick={() => del(ele.id)}>
                    remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Total total={total} />
    </Fragment>
  );
};

export default Detail;
