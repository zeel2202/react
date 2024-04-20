import React, { useEffect, useReducer, useState } from 'react'
import HocRoute from './HocRoute'
import { apiReducer } from './apiReducer'
import { Link, useNavigate } from 'react-router-dom'

function Table() {
    const [state, dispatch] = useReducer(apiReducer, [])
    const [aray, setAray] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
      dispatch({type:"GET"})
      getData()
    }, [])
    useEffect(() => {
      getData()
    }, [state])
    
    const getData=async()=>{
        setAray([...await state])
    }
    console.log(aray);

    const deleteData=(id)=>{
      dispatch({type:'DELETE',id})
    }

    
    
  return (
    <div>
        <table className='table'>
            <thead>
              <tr>
              <th>image</th>
                <th>firstName</th>
                <th>lastName</th>
                <th>hobbies</th>
                <th>gender</th>
                <th>city</th>
                <th>age</th>
                <th>actions</th>
              </tr>
                
            </thead>
            <tbody>
                {
                    aray.map((x,i)=>{
                        return(
                            <tr key={i}>
                                <td>
                                    <img src={x.image} alt="" width={"50"} height={"50"}/>
                                </td>
                                <td>{x.firstName}</td>
                                <td>{x.lastName}</td>
                                <td>{x.hobbies}</td>
                                <td>{x.gender}</td>
                                <td>{x.city}</td>
                                <td>{x.age}</td>
                                <td><Link to={'/form/'+x._id}><button className='btn btn-warning' >Edit</button></Link><button className='btn btn-danger ' onClick={()=>deleteData(x._id)}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default HocRoute(Table)