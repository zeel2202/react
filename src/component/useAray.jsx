import React, { useState } from 'react'

function useAray() {
    const [aray, setAray] = useState([])
    const addObj=(val)=>{
        aray.push(val)
        setAray([...aray])
    }

  return [aray,addObj]
}

export default useAray