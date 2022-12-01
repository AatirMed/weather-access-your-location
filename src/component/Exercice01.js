import React, { useEffect, useState } from "react";

const Exercice01 = () => {
  //data
  const [data, setData] = useState([
    { Nom: "Med", NoteBac: 15, Option: 'DEV' },
    { Nom: "Alex", NoteBac: 17, Option: 'DEV' },
    { Nom: "Ali", NoteBac: 16, Option: 'DEV' },
    { Nom: "Farmer", NoteBac: 11, Option: 'DEV' },
    { Nom: "Maid", NoteBac: 9, Option: 'ID' },
    { Nom: "Pablo", NoteBac: 11, Option: 'ID' },
    { Nom: "Florida", NoteBac: 10, Option: 'Multimedia' },
    { Nom: "Ayoub", NoteBac: 13, Option: "Reseau" }
  ]);

  //useState
  const [Choix, setChoix] = useState({});
  const [Moyen, setMoyen] = useState(0)
  //Option 
  const Option_List_filter = [...new Set(data.map(ele => ele.Option))];

  //SelectHandChange
  const SelectHandChange = (event) => {
    const Data_filter = data.map(ele => ele.Option === event.target.value ? { ...ele } : null).filter(ele => ele !== null)
    const Data_filter_Sort = Data_filter.sort((a, b) => a.NoteBac - b.NoteBac)
    setChoix({ ...Data_filter_Sort[0] })
  }
  //par default
  useEffect(() => {
    const Data_filter = data.map(ele => ele.Option === 'DEV' ? { ...ele } : null).filter(ele => ele !== null)
    const Data_filter_Sort = Data_filter.sort((a, b) => a.NoteBac - b.NoteBac)
    setChoix({ ...Data_filter_Sort[0] })
  }, [])

  useEffect(() => {
    const dataList = data.filter(ele => ele.NoteBac > 12)
    const x = dataList.reduce((total, obj) => total + obj.NoteBac, 0)
    setMoyen(x / dataList.length)
  }, [data])

  return (
    <div className="body">

      <div>
        {
          data.map((ele, index) => <div key={index}>{ele.Nom.toUpperCase()} : {ele.NoteBac}<br /><br /></div>)
        }
      </div>

      <button onClick={() => { setData([...data, { Nom: "Fatima", NoteBac: 14, Option: 'ID' },]) }}>Add</button>

      <br /><br />

      <select onClick={SelectHandChange}>
        {Option_List_filter.map((obj, index) => <option key={index} value={obj}>{obj}</option>)}
      </select>

      <span>&nbsp;&nbsp;{Choix.Option} : la plus petite note de bac est <mark> {Choix.Nom} </mark> : {Choix.NoteBac}</span>

      <br /><br />

      <span>la moyenne des notes des stagiaire qui ont eu le bac  avec note &gt; 12 : <mark>{Moyen.toFixed(2)}</mark></span>

    </div>
  );
};

export default Exercice01;
