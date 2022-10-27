import React , {useState, useEffect}  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const Home = () =>{

const [users, setUsers] = useState([]);


useEffect(()=>{
 loadUsers();
}, []); 

const loadUsers = async () =>{
 const result = await axios.get("http://localhost:3001/users");

 setUsers(result.data.reverse());
};


  const deleteUser = async id =>{
     await axios.delete(`http://localhost:3001/users/${id}`);

     loadUsers();
  }

 return (
  <div className="container">
   <div className="py-4">
    <h1>Home Page</h1>
     <table className="table table-striped table-dark table-hover table-bordered shadow">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
           users.map((user, index) => (
            <tr>
             <td scope="row" > {index + 1} </td>
             <td> {user.name} </td>
             <td> {user.username} </td>
             <td> {user.email} </td>
             <td>
               <Link className="btn btn-info btn-sm my-1 mx-1"  to={`/users/${user.id}`}>View</Link>
               
               <Link className="btn btn-warning btn-sm my-1 mx-1" to={`/users/edit/${user.id}`}>Edit</Link>

               <Link className="btn btn-danger btn-sm my-1 mx-1" onClick={()=> deleteUser(user.id)}>Delete</Link>
             </td>
            </tr>
           ))
          }
        </tbody>
     </table>
   </div>
  </div>
 );
};

export default Home;