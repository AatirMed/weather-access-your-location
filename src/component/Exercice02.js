import React, { useState } from "react";

const Exercice02 = ()=>{
const [inputValue,setInputValue]=useState('')
const[Valid,setValid]=useState(true)
const[ValidMessage,setValidMessage]=useState(false);
const [Message,setMessage]=useState('')
const HandChangeInput =(event)=>setInputValue(event.target.value)

const Validation_input = ()=>{
    const regex = /^.{10}$/;
    if(regex.test(inputValue)){
        setValid(true)
        setMessage('vous avez bien saisi 10 letters')
        setValidMessage(true)
    }else if(inputValue.length>10 || inputValue.length<10 ){
        setValid(false)
        setValidMessage(false)
        setMessage('Saisir un text 10 letters')
    }
}
return(
    <div className="body">
    <input type='text' className={Valid?'validTrue valid':'validFalse valid'} placeholder='taper 10 letters' onChange={HandChangeInput}/>
    <button onClick={Validation_input}>Valid</button>
    <br/><br/>
    <span className={Valid?'textCtrue':'textCfalse'}>{Message}</span>
    <p style={{display:ValidMessage?'block':'none'}}>vous avez Ecrit : {inputValue}</p>
    </div>

)
}

export default Exercice02;