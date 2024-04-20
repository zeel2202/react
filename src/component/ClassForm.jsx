import React, { Component } from 'react'
import HocRoute from './HocRoute'
import axios from 'axios'

 class ClassForm extends Component {
    constructor(props){
        super(props)
        this.state={
            obj:{hobbies:[]},
            blankObj:{hobbies:[]},
        }
        this.getdata=this.getdata.bind(this)
    }
    componentDidMount(){
        if(this.props.routes.params.name){
            axios.get("https://student-api.mycodelibraries.com/api/user/get-user-by-id?id="+this.props.routes.params.name).then((res)=>{
            console.log(res.data.data);
            this.setState({obj:{...res.data.data,hobbies:res.data.data.hobbies.split(",")}})
        })
        }

    }

     getdata(e){
        if(e.target.name === 'hobbies'){
            if(e.target.checked){
                this.state.obj.hobbies.push(e.target.value)
            }else{
                this.state.obj.hobbies= this.state.obj.hobbies.filter((x)=>x !== e.target.value)
            }
            this.state.blankObj.hobbies=[]
        }else if(e.target.name ==='image'){
            this.state.obj[e.target.name] =e.target.files[0]
            this.state.blankObj.userImage =''
        }
        else{
            this.state.obj[e.target.name]=e.target.value
            this.state.blankObj[e.target.name]=''
        }
        this.setState({obj:{...this.state.obj}})
        this.setState({blankObj:{...this.state.blankObj}})
    }

    savedata=()=>{
        const formData = new FormData()
        formData.append("firstName",this.state.obj.firstName)
        formData.append("lastName",this.state.obj.lastName)
        formData.append("age",this.state.obj.age)
        formData.append("hobbies",this.state.obj.hobbies)
        formData.append("gender",this.state.obj.gender)
        formData.append("city",this.state.obj.city)
        formData.append("userImage",this.state.obj.image)

        if(this.props.routes.params.name){
            formData.append("id",this.props.routes.params.name)
            this.props.dispatch({type:"EDIT",obj:formData})
        }else{

            this.props.dispatch({type:"ADD",data:formData})
        }

        this.setState({obj:{...this.state.blankObj}})
        setTimeout(() => {
            this.props.routes.navigate("/table")
        }, 500);
    }
  render() {
    return (
        <div><form action="" className="w-50 mx-auto shadow-lg p-3" >
        <label className="d-block">First Name</label>
        <input
            type="text"
            name="firstName"
            className="w-100"
            onChange={this.getdata}
            value={this.state.obj.firstName}
        />
        <label className="d-block">lastName</label>
        <input
            type="text"
            name="lastName"
            className="w-100"
            onChange={this.getdata}
            value={this.state.obj.lastName}
        />
        <label className="d-block">age</label>
        <input
            type="number"
            name="age"
            className="w-100"
            onChange={this.getdata}
            value={this.state.obj.age}
        />
        <label className="d-block">city</label>
        <input
            type="text"
            name="city"
            className="w-100"
            onChange={this.getdata}
            value={this.state.obj.city}
        />
        <label className="d-block">gender</label>
        <input
            type="radio"
            name="gender"
            className=""
            onChange={this.getdata}
            value={"male"}
            checked={this.state.obj.gender === 'male'}
        />  male
        <input
            type="radio"
            name="gender"
            className=""
            value={"female"}
            onChange={this.getdata}
            checked={this.state.obj.gender === 'female'}
        />female <br />
        <label className="d-block">hobbies</label>
        <input
            type="checkbox"
            value={"football"}
            name="hobbies"
            className=""
            onChange={this.getdata}
            checked={this.state.obj.hobbies.includes("football")}
        />  football
        <input
            type="checkbox"
            name="hobbies"
            value={"cricket"}
            className=""
            onChange={this.getdata}
            checked={this.state.obj.hobbies.includes("cricket")}
        />  cricket
        <input
            type="checkbox"
            name="hobbies"
            value={"basketball"}
            className=""
            onChange={this.getdata}
            checked={this.state.obj.hobbies.includes("basketball")}
        />basketball <br />
           <label className="d-block">Profile</label>
           <input type="file" name='image' onChange={this.getdata}/> <br />
        <button className='btn btn-success' type="button" onClick={this.savedata}>Save</button>
    </form></div>
    )
  }
}
export default HocRoute( ClassForm)