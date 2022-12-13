import React, { useState } from "react";
import './App.css';
import img1 from './Day01img/Day1Card01.jpg';
import img2 from './Day01img/Day1Card02.jpg';
import img3 from './Day01img/Day1Card03.jpg';
import img4 from './Day01img/Day1Card04.jpg';
import img5 from './Day01img/Day1Card05.jpg';

const App = () => {

  const All_img = [img1, img2, img3, img4, img5]
  const [Choix, setChoix] = useState(0)
  const HandClickCard = (index) => setChoix(index)

  console.log(Choix)
  return (
    <div className="main">
      {
        All_img.map((ele, index) =>
          <div key={index}
            className={Choix === index ? 'panel active' : 'panel'}
            style={{
              backgroundImage: `url(${ele})`
            }}
            onClick={() => HandClickCard(index)}>
            <h3>Explore The World</h3>
          </div>)
      }
    </div>
  );
};

export default App;



