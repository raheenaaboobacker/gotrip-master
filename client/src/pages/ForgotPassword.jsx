import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import HomeNav from '../Components/HomeNav'

export default function ForgotPassword() {
    const [uname,setUname]=useState("")
    const navigate=useNavigate();

    const handleChange=(e)=>{
        setUname(e.target.value)
        console.log(uname);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(uname);
        axios.get(`http://localhost:5000/login/getUserName/${uname}`)
        .then((response) => {
          console.log(response.data.success);
          if(response.data.success===true){
            navigate('/resetpassword',{state:uname})
          }else{
            alert(response.data.message)
          }
        }).catch(err=>{
          alert(err.response.data.message)
        })
    }
  return (
    <div>
        <HomeNav/>
        <div className="form-gap"></div>
<div className="container" style={{height:"500px"}}>
	<div className="row">
		<div className="col-md-4 col-md-offset-4">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="text-center">
                  <h3><i className="fa fa-lock fa-4x"></i></h3>
                  <h2 className="text-center">Forgot Password?</h2>
                  <p>You can reset your password here.</p>
                  <div className="panel-body">
    
                    <form id="register-form" role="form" onSubmit={handleSubmit} autoComplete="off" className="form">
    
                      <div className="form-group">
                        <div className="input-group">
                          <span style={{width:"35px"}} className="input-group-addon"><i className="fa fa-user "></i></span>
                          <input id="uname" name="uname" placeholder="User Name" onChange={handleChange} className="form-control"  type="text"/>
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
        <Footer/>
    </div>
  )
}
