import React, { useState, useEffect } from "react";
import Totalremese from "./Totalremese";

const Total = (props) => {
  const [index, setindex] = useState(0);
  useEffect(
    () =>
      setindex(
        props.data.reduce(
          (total, obj) => total + (obj.selectionné ? obj.prix : 0),
          0
        )
      ),
    [props.data]
  );

  return (
    <React.Fragment>
      <div className="total">
        <span>Total pour une personne</span>
        <span>{index}</span>
      </div>
      <Totalremese total={index} />
    </React.Fragment>
  );
};

export default Total;
