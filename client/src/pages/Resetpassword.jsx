import React from 'react'
import Footer from '../Components/Footer'
import HomeNav from '../Components/HomeNav'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function Resetpassword() {
    const location=useLocation();
    const uname=location.state
    const [password,setPassword]=useState("")
    const navigate=useNavigate();

    const handleChange=(e)=>{
        setPassword(e.target.value)
        console.log(password);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
        console.log(password);
        if (!strongPassword.test(password)) {
            toast.warning("Please enter Strong password.it must contains digit, character, Uppercase,Special character!!", { autoClose: 3000, theme: 'light' })

          }
        else {
            const contacts={
                uname:uname,
                password:password
            }
            axios.post("http://localhost:5000/login/resetPassword",contacts)
            .then((response) => {
            console.log(response);
            if(response.data.success===true){
                alert(response.data.message)
                navigate("/")
            }else{
            alert(response.data.message)
            }
            })
            .catch(err=>{
                alert(err.response.data.message)
            })
        }
    }
  return (
    <div>
    <HomeNav/>
    <div className="form-gap"></div>
<div className="container"  style={{height:"500px"}}>
<div className="row">
    <div className="col-md-4 col-md-offset-4">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="text-center">
              <h3><i className="fa fa-lock fa-4x"></i></h3>
              <h2 className="text-center">Reset Password?</h2>
              <p>You can reset your password here.</p>
              <div className="panel-body">

                <form id="register-form" role="form" onSubmit={handleSubmit} autoComplete="off" className="form">

                  <div className="form-group">
                    <div className="input-group">
                      <span style={{width:"35px"}} className="input-group-addon"><i className="fa fa-user "></i></span>
                      <input id="password" name="password" placeholder="Enter new Password" onChange={handleChange} className="form-control"  type="password"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <input name="recover-submit" className="btn btn-lg btn-primary btn-block" value="Reset Password" type="submit"/>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
</div>
</div>
<ToastContainer/>
    <Footer/>
</div>
  )
}
