import React, { useState } from 'react'
import { json } from 'react-router-dom'
import useAray from './useAray'

function ComtomHook() {
    const [aray,setObj] =useAray()
    const [obj, setobj] = useState({name:'kwefnjefu'})
    const addObj=()=>{
        setObj(obj)
    }
    // console.log(aray);
  return (
    <div>
        <h1>ComtomHook</h1>
        {JSON.stringify(aray)}
        <button onClick={addObj}>Add</button>
    </div>
  )
}

export default ComtomHook