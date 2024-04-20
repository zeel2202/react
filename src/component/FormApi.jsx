import React, { useReducer, useState } from 'react'
import HocRoute from './HocRoute'
import { apiReducer } from './apiReducer'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

function FormApi(props) {
    const [obj, setobj] = useState({hobbies:[]})
    const [blankObj, setblankobj] = useState({hobbies:[]})
    const [state, dispatch] = useReducer(apiReducer, [])
    const navigate = useNavigate()
    const params = useParams()

    useEffect(()=>{
       if(params.name){
        axios.get("https://student-api.mycodelibraries.com/api/user/get-user-by-id?id="+params.name).then((res)=>{
            console.log(res.data.data);
            setobj({...res.data.data})
        })
       }
    },[])


    const getdata=(e)=>{
        if(e.target.name === 'hobbies'){
            if(e.target.checked){
                obj.hobbies.push(e.target.value)
            }else{
                obj.hobbies= obj.hobbies.filter((x)=>x !== e.target.value)
            }
            blankObj.hobbies=[]
        }else if(e.target.name ==='image'){
            obj[e.target.name] =e.target.files[0]
            blankObj.userImage =''
        }
        else{
            obj[e.target.name]=e.target.value
            blankObj[e.target.name]=''
        }
        
        setobj({...obj})
        setblankobj({...blankObj})
    }
    const savedata=()=>{
        const formData = new FormData()
        formData.append("firstName",obj.firstName)
        formData.append("lastName",obj.lastName)
        formData.append("age",obj.age)
        formData.append("hobbies",obj.hobbies)
        formData.append("gender",obj.gender)
        formData.append("city",obj.city)
        formData.append("userImage",obj.image)

        // console.log(obj);
        // console.log(formData);

        // for(let x of formData.entries()){
        //     console.log(x);
        // }
        if(params.name){
            formData.append("id",params.name)
            dispatch({type:"EDIT",obj:formData})
        }else{
            dispatch({type:"ADD",data:formData})
        }

        setobj({...blankObj})
        setTimeout(() => {
            navigate('/table')
        }, 500);
        
    }
    return (
        <div><form action="" className="w-50 mx-auto shadow-lg p-3" >
            <label className="d-block">First Name</label>
            <input
                type="text"
                name="firstName"
                className="w-100"
                onChange={getdata}
                value={obj.firstName}
            />
            <label className="d-block">lastName</label>
            <input
                type="text"
                name="lastName"
                className="w-100"
                onChange={getdata}
                value={obj.lastName}
            />
            <label className="d-block">age</label>
            <input
                type="number"
                name="age"
                className="w-100"
                onChange={getdata}
                value={obj.age}
            />
            <label className="d-block">city</label>
            <input
                type="text"
                name="city"
                className="w-100"
                onChange={getdata}
                value={obj.city}
            />
            <label className="d-block">gender</label>
            <input
                type="radio"
                name="gender"
                className=""
                onChange={getdata}
                value={"male"}
                checked={obj.gender === 'male'}
            />  male
            <input
                type="radio"
                name="gender"
                className=""
                value={"female"}
                onChange={getdata}
                checked={obj.gender === 'female'}
            />female <br />
            <label className="d-block">hobbies</label>
            <input
                type="checkbox"
                value={"football"}
                name="hobbies"
                className=""
                onChange={getdata}
                checked={obj.hobbies.includes("football")}
            />  football
            <input
                type="checkbox"
                name="hobbies"
                value={"cricket"}
                className=""
                onChange={getdata}
                checked={obj.hobbies.includes("cricket")}
            />  cricket
            <input
                type="checkbox"
                name="hobbies"
                value={"basketball"}
                className=""
                onChange={getdata}
                checked={obj.hobbies.includes("basketball")}
            />basketball <br />
               <label className="d-block">Profile</label>
               <input type="file" name='image' onChange={getdata}/> <br />
            <button className='btn btn-success' type="button" onClick={savedata}>Save</button>
        </form></div>
    )
}

export default HocRoute(FormApi)