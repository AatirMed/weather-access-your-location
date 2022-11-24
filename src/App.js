import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import './App.css'

const App = () => {
  const List_style = ['Well done', 'Heads up', 'Warming', 'Oh snap']
  const [choixStyle, setchoixStyle] = useState('Well done')
  const [contenu, setContenu] = useState('you succeefully read this important alert message')
  const [checked, setChecked] = useState(false)
  const [NumberAdd, setNumberAdd] = useState(1)
  const [data, setdata] = useState(
    [
      { id: 1, style: 'Well done', contenu: 'you succeefully read this important alert (Test)' }
    ]
  )

  const Contenu = (event) => setContenu(event.target.value)
  const option_style = (event) => setchoixStyle(event.target.value)
  const changeChecked = () => { setChecked(!checked) }
  const HandChangeInput = (event) => { setNumberAdd(parseInt(event.target.value)) }

  const Add = () => {
    let ListData = []
    for (let i = 0; i < parseInt(NumberAdd); i++) {
      ListData.push({ id: nanoid(), style: choixStyle, contenu: contenu })
    }
    setdata([...data, ...ListData])
  }



  return (
    <div className="all">
      <div className="Contenu">

        {/* contenu */}
        <span>Contenu</span>
        <textarea onChange={Contenu} placeholder='contenu tap...'></textarea>

        {/* style */}
        <span>style</span>
        <select onChange={option_style}>
          {
            List_style.map(ele => <option key={ele} value={ele}>{ele}</option>)
          }
        </select>

        {/* checked */}
        <div className="icon_delete">
          <input type='checkbox' onChange={changeChecked} defaultChecked={checked} />
          <span>close button</span>
        </div>

        {/* Add */}
        <div>
          <button onClick={Add}>
            creer
          </button>
          <input type='number' value={NumberAdd} onChange={HandChangeInput} />
          <span>Alert(s)</span>
        </div>
      </div>

      {/* test */}
      <div>
        <h5>Alerte temoin</h5>
        <div className={choixStyle === 'Well done' ? 'green' : choixStyle === 'Heads up' ? 'blue' : choixStyle === 'Warming' ? 'Warming' : choixStyle === 'Oh snap' ? 'danger' : null}>
          <span>{choixStyle}</span>
          <span className="top">{contenu}</span>
          {checked ? <button className="btn">x</button> : null}
        </div>
      </div>

      {/* Add List */}
      <div>
        <h5>Collection D'alert</h5>
        {data.map(ele => {
          return (
            <div key={ele.id} style={{ marginBottom: '5px' }} className={ele.style === 'Well done' ? 'green' : ele.style === 'Heads up' ? 'blue' : ele.style === 'Warming' ? 'Warming' : ele.style === 'Oh snap' ? 'danger' : null}>
              <span>{ele.style}</span>
              <span className="top">{ele.contenu}</span>
              {checked ? <button className='btn' onClick={() => { setdata([...data.filter(obj => obj.id !== ele.id)]) }}>x</button> : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App


