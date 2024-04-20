import React, { Component } from 'react'
import HocRoute from './HocRoute'
import { Link } from 'react-router-dom';

export class ClassTable extends Component {
    constructor(props){
        super(props)
        this.state={
            aray:[]
        }
        
    }
    deleteData=(id)=>{
        this.props.dispatch({type:"DELETE",id})
    }
  render() {
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
                    this.props.aray.map((x,i)=>{
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
                                <td><Link to={'/form/'+x._id}><button className='btn btn-warning' >Edit</button></Link><button className='btn btn-danger ' onClick={()=>this.deleteData(x._id)}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}

export default HocRoute(ClassTable)