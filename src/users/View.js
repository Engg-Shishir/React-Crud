import React , {useState, useEffect}  from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';


const View = () =>{
 const [user, setUser] = useState({
  name: "",
  username: "",

  email: "",
  phone: "",
  website: ""
});
const {id} = useParams();



useEffect(()=>{
 loadUser();
},[]);



const loadUser = async () =>{
 const result = await axios.get(`http://localhost:3001/users/${id}`);
  setUser(result.data);
}

 return(
   <div className="container ">
     <Link className="btn btn-primary btn-sm mt-5" to="/" >
      Back To Home
     </Link>

    <h1 className="display-4"> User Id : {id}</h1>
    <hr />
    <br />
    
      <table className="table table-striped table-light table-hover table-bordered shadow">
         <thead className="thead-dark">
           <tr>
             <th scope="col">Name</th>
             <th scope="col">User Name</th>
             <th scope="col">Email</th>
             <th scope="col">Phone</th>
             <th scope="col">Website</th>
             <th scope="col">City</th>
           </tr>
         </thead>
      

         <tbody>
           <tr>
             <td> {user.name} </td>
             <td> {user.username} </td>
             <td> {user.email} </td>
             <td> {user.phone} </td>
             <td> {user.website} </td>
             <td></td>
           </tr>
         </tbody>

      </table>
   </div>
 );


};

export default View;