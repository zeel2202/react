import React, { useReducer, useState } from 'react';
import { ReducerFun } from './counterReducer';

function ReducerComp() {
    const [state, dispatch] = useReducer(ReducerFun, []);

    
    const submit = () => {
        dispatch({ type: "add", obj: {name1:"hello"} })

    }


    return (
        <>
           <h1>{JSON.stringify(state)}</h1>
            <button className='btn btn-primary' onClick={submit}>Add Obj</button>




           
        </>
    );
}

export default ReducerComp;
