import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';

const Edit = () =>{

 let history = useHistory()
 const {id} = useParams();
 const [user, setUser] = useState({
   name: "",
   username: "",
   email: "",
   phone: "",
   website: ""
 });

 const {name, username, email, phone, website } = user;

 const onInputChange = e =>{
  //console.log(e.target.value);
  setUser({...user,[e.target.name]: e.target.value})
 };

useEffect(()=>{
 loadUser();
},[]);


 const onSubmit = async e =>{
   e.preventDefault();

   await axios.put(`http://localhost:3001/users/${id}`, user);
   history.push("/");

 };

 const loadUser = async () =>{
  const result = await axios.get(`http://localhost:3001/users/${id}`);
   setUser(result.data);
 }

 return (
   <div className="container">
     <form className="py-5" onSubmit={e => onSubmit(e)}>
      
      <div className="form-group row">
        <label for="name" className="col-sm-2 col-form-label">Name</label>
        <div className="col-sm-10">
          <input name="name" type="text"
           className="form-control" placeholder="Your Name..." 
           value={name}
           onChange={e => onInputChange(e)}
           />
        </div>
      </div>
      
      <div className="form-group row">
        <label for="username" className="col-sm-2 col-form-label">UserName</label>
        <div className="col-sm-10">
          <input name="username" type="text" className="form-control" placeholder="Enter UserName" 
           value={username}
           onChange={e => onInputChange(e)}
          />
        </div>
      </div>

      <div className="form-group row">
        <label for="email" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input name="email" type="email" className="form-control"  placeholder="Email" 
           value={email}
           onChange={e => onInputChange(e)}
          />
        </div>
      </div>
      
      <div className="form-group row">
        <label for="phone" className="col-sm-2 col-form-label">Phone</label>
        <div className="col-sm-10">
          <input name="phone" type="text" className="form-control"  placeholder="Enter Phone No.." 
           value={phone}
           onChange={e => onInputChange(e)}
          />
        </div>
      </div>

      <div className="form-group row">
        <label for="website" className="col-sm-2 col-form-label">Website</label>
        <div className="col-sm-10">
          <input name="website" type="text" className="form-control"  
           value={website}
           onChange={e => onInputChange(e)}
           placeholder="Enter Website name..."
          />
        </div>
      </div>

  
      <div className="form-group row">
        <label for="submit" className="col-sm-2 col-form-label">🔰</label>
        <div className="col-sm-10">
          <input type="submit" className="form-control btn btn-warning" value="Edit User" id="submit"/>
        </div>
      </div>
      
    </form>      
   </div>
 );
};

export default Edit;