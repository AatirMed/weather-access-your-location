import React, { useEffect, useState } from "react";

const Totalremese = (props) => {
  const [qte, setqte] = useState(1);
  const HandInput = (e) => setqte(e.target.value);

  const [TotalRemise, setTotalRemise] = useState(300);
  const [TotalavecRemise, setTotalavecRemise] = useState(300);

  useEffect(() => {
    if (qte < 4) {
      setTotalRemise(parseFloat(qte * 0.02 * props.total));
      setTotalavecRemise(
        parseFloat(qte * props.total - qte * 0.02 * props.total)
      );
    } else if (qte >= 4 && qte < 8) {
      setTotalRemise(parseFloat(qte * 0.08 * props.total));
      setTotalavecRemise(
        parseFloat(qte * props.total - qte * 0.08 * props.total)
      );
    } else if (qte >= 8) {
      setTotalRemise(parseFloat(qte * 0.1 * props.total));
      setTotalavecRemise(
        parseFloat(qte * props.total - qte * 0.1 * props.total)
      );
    }
  }, [props.total, qte]);

  return (
    <div className="totalRemise">
      <div className="t1">
        <span>nomber adultes </span>
        <input type="number" defaultValue='1' onChange={HandInput} />
      </div>
      <div className="t1">
        <span>Remise</span>
        <span>{TotalRemise.toFixed(2)}</span>
      </div>

      <div className="t1">
        <span>TotalavecRemise</span>
        <span>{TotalavecRemise.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Totalremese;
