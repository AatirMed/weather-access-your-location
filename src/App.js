import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import moment from "moment/moment";
import { getElement } from "./store";
import "./App.css";


const App = () => {
  const dispatch = useDispatch();
  const store = useSelector((res) => res);
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
const [Celsius,setCelsius]=useState(0)

  // get location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => setLocation(position.coords),
      (error) => console.error(error)
    );
  }, []);

  // get data weather
  useEffect(() => {
    dispatch(getElement(location));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(()=>{setCelsius(parseInt(store.data.main.temp - 272.15))},[store])
  
  return (
    <Fragment>
      {!store.isLoding ? <div className="load"><CircularProgress /></div> :

        <div className="main">
          <div className="logoInfo">
            <img
              src="https://weather-app-psi-puce.vercel.app/static/media/day.0f9e45ee8e49d55fb4c625013d8a083b.svg"
              alt="img" />
            <div className="info">
              <h3>{store.data.name}</h3>
              <span>{moment().format("ddd,MMM d")}</span>
              <div className="Celsius">
                <span className="NbrC">{Celsius}</span>
                <span className="x">°</span>
              </div>
            </div>
          </div>
        </div>}
    </Fragment>

  );
};

export default App;
// //
//

// <br/>
//   {moment().format("LL")}
//   <br />
//   <br />
//   {parseInt(store.data.main.temp - 272.15)}
