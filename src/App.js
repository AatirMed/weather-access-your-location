import React, { Fragment, useEffect, useState } from "react";
import "./css/App.css";

const App = () => {
  //data
  const [squares, setSquares] = useState([
    { id: 0, checked: false, choix: "" },
    { id: 1, checked: false, choix: "" },
    { id: 2, checked: false, choix: "" },
    { id: 3, checked: false, choix: "" },
    { id: 4, checked: false, choix: "" },
    { id: 5, checked: false, choix: "" },
    { id: 6, checked: false, choix: "" },
    { id: 7, checked: false, choix: "" },
    { id: 8, checked: false, choix: "" },
  ]);
  const [o, setO] = useState([]);
  const [x, setX] = useState([]);
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [permission, setpermission] = useState(true);
  const [nbr, setNbr] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [result, setResult] = useState([]);

  //player X
  const HandClick = (id) => {
    if (permission && result.length === 0) {
      setSquares([
        ...squares.map((ele) =>
          ele.id === id ? { ...ele, checked: true, choix: "x" } : { ...ele }
        ),
      ]);
      setNbr(nbr.filter((ele) => ele !== id));
      setpermission(false);
    }
  };

  //player O
  useEffect(() => {
    if (permission === false && result.length === 0) {
      const List_playerX = [...x.map((ele) => ele.id)];
      const List_playerO = [...o.map((ele) => ele.id)];

      var g = [];
      var go = [];

      // Center Back
      win.map((oneList) => {
        let count = 0;
        oneList.map((SingleOfList) => {
          List_playerX.map((ele) => {
            if (ele === SingleOfList) {
              count++;
            }
            return "";
          });
          return "";
        });

        if (
          List_playerX.length > 0 &&
          List_playerX.length <= 1 &&
          count === 1
        ) {
          g.push(oneList);
        }

        if (List_playerX.length >= 2 && count === 2) {
          if (List_playerX.length === 2) g = [];
          g.push(oneList);
        }
        return "";
      });

      // Attack
      win.map((oneList) => {
        let count = 0;
        oneList.map((SingleOfList) => {
          List_playerO.map((ele) => {
            if (ele === SingleOfList) {
              count++;
            }
            return "";
          });
          if (count === 2) go.push(oneList);
          return "";
        });
        return "";
      });

      //[[1,2,3],[4]] to oneLIst [1,2,3,4]
      var arrChanse = [];
      g.map((ele) => ele.map((ele1) => arrChanse.push(ele1)));

      //list de list to oneLIst
      var arrChanse1 = [];
      go.map((ele) => ele.map((ele1) => arrChanse1.push(ele1)));

      let Nbr_choix = nbr.filter((item) => arrChanse1.includes(item));
      if (go.length === 0)
        Nbr_choix = nbr.filter((item) => arrChanse.includes(item));

      let Nbr_choix_random =
        Nbr_choix[Math.floor(Math.random() * Nbr_choix.length)];
      if (Nbr_choix.length === 0)
        Nbr_choix_random = nbr[Math.floor(Math.random() * nbr.length)];

      setTimeout(() => {
        setSquares([
          ...squares.map((ele) =>
            ele.id === Nbr_choix_random
              ? { ...ele, checked: true, choix: "o" }
              : { ...ele }
          ),
        ]);
        setNbr(nbr.filter((ele) => ele !== Nbr_choix_random));
        setpermission(true);
      }, 600);
    }
  }, [permission, x, o]);

  //filter list to 2 lists
  useEffect(() => {
    setX(
      squares
        .map((obj) => (obj.checked && obj.choix === "x" ? { ...obj } : null))
        .filter((x) => !!x)
    );
    setO(
      squares
        .map((obj) => (obj.checked && obj.choix === "o" ? { ...obj } : null))
        .filter((x) => !!x)
    );
  }, [squares]);

  // check player X && O ------------------------------
  useEffect(() => {
    const playerX = [...x.map((ele) => ele.id)];
    const playerO = [...o.map((ele) => ele.id)];

    // check player x
    win.map((win) => {
      let winX = 0;
      win.map((winOne) =>
        playerX.map((ele) => {
          if (ele === winOne) winX++;
          return "";
        })
      );
      if (winX >= 3) return setResult([...result, "you won"]);
      return "";
    });

    //check player o (over game)
    win.map((win) => {
      let winY = 0;
      win.map((winOne) =>
        playerO.map((ele) => {
          if (ele === winOne) winY++;
          return "";
        })
      );
      if (winY >= 3) return setResult([...result, "Game Over"]);
      return "";
    });
  }, [x, o]);
  //--------------------------------------------------

  return (
    <Fragment>
      {result.length === 0 && nbr.length === 0
        ? window.location.reload(true)
        : null}
      <div className={result.length === 0 ? "display_none" : "dis"}>
        <h2>{result[0]}</h2>
        <button onClick={() => window.location.reload(true)}>Rest</button>
      </div>

      <div className={result.length === 0 ? "main" : "display_none"}>
        {squares.map((ele) => {
          return (
            <button
              className="square"
              key={ele.id}
              disabled={ele.checked}
              onClick={() => HandClick(ele.id)}
            >
              <span disabled={ele.checked}>{ele.choix}</span>
            </button>
          );
        })}
      </div>
    </Fragment>
  );
};

export default App;
