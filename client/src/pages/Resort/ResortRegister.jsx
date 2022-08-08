import {React,useState} from 'react'
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import {TextField} from '@mui/material'
import {Form,Button} from "react-bootstrap"
import { useNavigate,Link } from 'react-router-dom';
import Footer from '../../Components/Footer';
import HomeNav from '../../Components/HomeNav';

function ResortRegister() {
    const navigate=useNavigate()
    const [file,setFile]=useState([" "])
    const [contacts,setContacts]=useState({
      uname:"",
      name:"",
      adhar_no:"",
      place:"",
      email:'',
      phone:"",
      dist:"",
      state:"",
      password:'',
      rname:"",
      description:"",
      price:"",
      rooms:"",
      image:"",
      role:3
    });
  
    const handleInputChange=(e)=>{
        const {name,value}=e.target
        setContacts({
            ...contacts,
            [name]:value
        })
       console.log(JSON.stringify(contacts));
    console.log(file);
    }
    const addContacts=(e)=>{
        e.preventDefault()
        var phoneno = /^\(?([0-9]{10})$/;
        var adharno = /^\(?([0-9]{12})$/;
        if(contacts.place===''){
          toast.warning("Please enter place!!",{autoClose:3000,theme:'light'})
        }else
        if(contacts.uname===''){
          toast.warning("Please enter user name!!",{autoClose:3000,theme:'light'})

        }else  if(contacts.name===''){
          toast.warning("Please enter name!!",{autoClose:3000,theme:'light'})

        }else  if(!adharno.test(contacts.adhar_no)){
          toast.warning("Please enter valid adhar number!!",{autoClose:3000,theme:'light'})

        }else  if(contacts.password===''){
          toast.warning("Please eneter password!!",{autoClose:3000,theme:'light'})

        }else
        if(contacts.address===''){
          toast.warning("Please enter address!!",{autoClose:3000,theme:'light'})

        }
       else if(!phoneno.test(contacts.phone))
        {
            toast.warning("Please enter a valid  phone number!!",{autoClose:3000,theme:'light'})
        }
        else
        if(contacts.rname===''){
          toast.warning("Please enter Resort Name!!",{autoClose:3000,theme:'light'})

        }
        else
        if(contacts.description===''){
          toast.warning("Please enter Description!!",{autoClose:3000,theme:'light'})

        }
        else
        if(contacts.price===''){
          toast.warning("Please enter Price!!",{autoClose:3000,theme:'light'})

        }
        else
        if(contacts.rooms===''){
          toast.warning("Please enter address!!",{autoClose:3000,theme:'light'})

        }
        else
        if(contacts.image===''){
          toast.warning("Please choose an image !!",{autoClose:3000,theme:'light'})

        }
        else {
          if(file){
            const data=new FormData();
            const filename=file.name
            data.append("name",filename)
            data.append("file",file)
            console.log(data);
            axios.post("http://localhost:5000/resort/upload",data)
            .then((response)=>{
                console.log(response)
            })
        }
            const header ={
              'Content-Type': 'application/json',
              
             }
     
            axios.post("http://localhost:5000/resortRegister",contacts,header) .then((response)=> {
              console.log("REGISTER RESULT======",response);
              if(response.data.success==true)
              {
                
                
                  alert(response.data.message);
                  navigate('/login')
                 
     
              }
     
             else{
                alert("Registration Failed!")
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

        <form className='container' onSubmit={addContacts} encType="multipart/formdata">

<Form.Group className="mb-3" controlId="formBasic">
<TextField fullWidth  id="outlined-basic" label="User Name" variant="outlined" name='uname' 
onChange={handleInputChange} value={contacts.uname} required/><br/><br/>
<TextField fullWidth  id="outlined-basic1" label="Name" variant="outlined" name='name' 
onChange={handleInputChange} value={contacts.name} required/><br/><br/>
<TextField fullWidth  id="outlined-basic10" label="Adhar Nomber" variant="outlined" name='adhar_no' 
onChange={handleInputChange} value={contacts.adhar_no} type='number' required/><br/><br/>
<TextField fullWidth  id="outlined-basic2" label="Place" variant="outlined" name='place' 
onChange={handleInputChange} value={contacts.place} required/><br/><br/>
<TextField fullWidth  id="outlined-basic5" label="District" variant="outlined" name='dist' 
onChange={handleInputChange} value={contacts.dist} required/><br/><br/>
<TextField fullWidth  id="outlined-basic5" label="State" variant="outlined" name='state' 
onChange={handleInputChange} value={contacts.state} required/><br/><br/>
<TextField fullWidth  id="outlined-basic3" label="Email" variant="outlined" name='email' type="email"
onChange={handleInputChange} value={contacts.email} required/><br/><br/>
<TextField fullWidth  id="outlined-basic4" label="Phone Nomber" variant="outlined" name='phone' 
onChange={handleInputChange} value={contacts.phone} type='number' required/><br/><br/>
<TextField fullWidth  id="outlined-basic6" label=" Resort Name" variant="outlined" name='rname' 
onChange={handleInputChange} value={contacts.rname} required/><br/><br/>
<TextField fullWidth  id="outlined-basic7" label="Description" variant="outlined" name='description' 
onChange={handleInputChange} value={contacts.description} required/><br/><br/>
<TextField fullWidth  id="outlined-basic8" label="No of rooms" type="number" variant="outlined" name='rooms' 
onChange={handleInputChange} value={contacts.rooms} required/><br/><br/>
<TextField fullWidth  id="outlined-basic9" label="Price" type="number" variant="outlined" name='price' 
onChange={handleInputChange} value={contacts.price} required/><br/><br/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasic">
<TextField fullWidth  id="outlined-password-input" label="Password" type="password" autoComplete="current-password"
name='password' onChange={handleInputChange} value={contacts.password} required  /><br/><br/>
      <div className="d-flex justify-content-center">
      <div className="btn btn-mdb-color btn-rounded float-left">
      <span>Choose file</span>
          <input type="file" name="image" required  
          onChange={(e)=>{setFile(e.target.files[0]); 
          setContacts({...contacts,image:e.target.files[0].name})}} />
       </div>
  </div>
</Form.Group>


<Button style={{padding:10,width:"110px"}} variant="warning"   type="submit" size="lg" >
Submit
</Button>
<p class="text-center text-muted mt-5 mb-0">Have already an account?
<Link to='/login'>

Login here
</Link>
</p>


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

export default ResortRegister