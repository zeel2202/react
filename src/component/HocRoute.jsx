import React, { useEffect, useReducer, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { apiReducer } from './apiReducer'

function HocRoute(Component) {
    const NewComponent=()=>{
        const [state, dispatch] = useReducer(apiReducer, [])
        const [aray, setAray] = useState([])
        const navigate=useNavigate()
        const params=useParams()
        
        useEffect(() => {
          dispatch({type:"GET"})
        }, [])

        useEffect(()=>{
            mountData()
        },[state])

        const mountData=async()=>{
            setAray([...await state])
        }
        return(
            <>
                <div className='d-flex bg-success p-3 justify-content-center '>
                <div className='bg-white p-2 me-2'><Link to='/form'>Form</Link></div>
                <div className='bg-white p-2 me-2'><Link to={'/table'}>Table</Link></div>
            </div>
            <div>
                <Component aray={aray} dispatch={dispatch} routes={{navigate,params}}/>
            </div>
            </>
        )
    }
  return (
   NewComponent
  )
}

export default HocRoute