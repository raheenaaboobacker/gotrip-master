import {React,useState} from 'react'
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import {TextField} from '@mui/material'
import {Form,Button} from "react-bootstrap"
import { useNavigate,Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import HomeNav from '../Components/HomeNav';
function Register() {
    const navigate=useNavigate()
    const [contacts,setContacts]=useState({
      uname:"",
      name:"",
      adhar_no:"",
      email:'',
      phone:"",
      password:'',
     role:2
    });
  
    const handleInputChange=(e)=>{
        const {name,value}=e.target
        setContacts({
            ...contacts,
            [name]:value
        })
       console.log(JSON.stringify(contacts));
    
    }
    const addContacts=(e)=>{
        e.preventDefault()
        var phoneno = /^[6-9]\d{9}$/;
        var adharno = /^\(?([0-9]{12})$/;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
        if (contacts.role === ''||contacts.name === ''||contacts.uname === ''||contacts.adhar_no === ''||contacts.email === ''||contacts.phone === ''
        ||contacts.password === '') {
          toast.warning("Please Fill All fields!!", { autoClose: 3000, theme: 'light' })
        } else
          if (contacts.uname === '') {
            toast.warning("Please enter user name!!", { autoClose: 3000, theme: 'light' })

          } else if (!adharno.test(contacts.adhar_no)) {
            toast.warning("Please enter Valid Adhar Number!!", { autoClose: 3000, theme: 'light' })

          } else
          if (!mailformat.test(contacts.email)) {
            toast.warning("Please enter valid email!!", { autoClose: 3000, theme: 'light' })

          } else 
          if (!phoneno.test(contacts.phone)) {
            toast.warning("Please enter a valid  phone number!!", { autoClose: 3000, theme: 'light' })
          }
          else if (!strongPassword.test(contacts.password)) {
            toast.warning("Please enter Strong password.it must contains digit, character, Uppercase,Special character!!", { autoClose: 3000, theme: 'light' })

          }
        else {
            const header ={
              'Content-Type': 'application/json',
              
             }
     
            axios.post("http://localhost:5000/register",contacts,header) .then((response)=> {
              console.log("REGISTER RESULT======",response);
              if(response.data.success==true)
              {
                
                
                  alert(response.data.message);
                  navigate('/login')
                 
     
              }
     
             else{
                 alert(response.data.message);
             }
             
     
            })
            .catch((error) => {
              console.log(error);
             
              alert(error.response.data.message)
             
            });
          }
          }
  return (
    <div>
      <HomeNav/>
        <div className="slider-area ">
               
               <div className="slider-active">
                   <div className="single-slider hero-overly  slider-height d-flex align-items-center" style={{ backgroundImage: "url(" + "assets/img/hero/h1_hero.jpg" + ")"}}  >
                       <div className="container">
                           <div className="row">
                               <div className="col-xl-11 col-lg-11 col-md-11">
                               <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-10 col-xl-9">
        <div className="card rounded-3">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
            className="w-100" style={{borderTopLefttRadius: ".3rem", borderTopRightRadius: ".3rem"}}
            alt="Sample photo"/>
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

            <form className='container' onSubmit={addContacts}>
                  <Form.Group className="mb-3" controlId="formBasic">
                  <TextField fullWidth  id="outlined-basic" label="User Name" variant="outlined" name='uname' 
                  onChange={handleInputChange} value={contacts.uname} required/><br/><br/>
                  <TextField fullWidth  id="outlined-basic1" label="Name" variant="outlined" name='name' 
                  onChange={handleInputChange} value={contacts.name} required/><br/><br/>
                  <TextField fullWidth  id="outlined-basic4" label="Adhar Number" variant="outlined" name='adhar_no' 
                  onChange={handleInputChange} value={contacts.adhar_no}  type="number" required/><br/><br/>
                  <TextField fullWidth  id="outlined-basic2" label="Email" variant="outlined" name='email' type="email"
                  onChange={handleInputChange} value={contacts.email} required/><br/><br/>
                  <TextField fullWidth  id="outlined-basic3" label="Phone Nomber"  type="number" variant="outlined" name='phone' 
                  onChange={handleInputChange} value={contacts.phone} required/><br/><br/>

                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasic">
                  <TextField fullWidth  id="outlined-password-input" label="Password" type="password" autoComplete="current-password"
                  name='password' onChange={handleInputChange} value={contacts.password} required  />
                  
                  </Form.Group>
                  <div className="d-grid gap-2">

                  <div className="d-grid gap-2">

                  <Button style={{ padding: 10, width: "110px" }} variant="warning" type="submit" size="lg" >
                  Submit
                  </Button>
                  <p class="text-center text-muted mt-5 mb-0">Have already an account?<span><Link to='/login'>

                  <h6>Login here</h6>
                  </Link></span></p>
                </div>
              </div>
            </form>
            <ToastContainer/>
          </div>
        </div>
      </div>
    </div>
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

export default Register