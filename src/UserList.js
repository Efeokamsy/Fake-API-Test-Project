
import React, {useState, useEffect} from "react";
import axios from "axios";

function UserList() {
const {users, setUsers}= useState([])
useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/users")
.then(res=>{
console.log(res)
setUsers(res.data)
})
.catch(err=>{
    console.log(err)
})
})
  return (
    <div className="App">
    {users.map((user, key) =>
    <div user={user} key={key}>
      <h3>{user.id}</h3>
      <h3>{user.name}</h3>
      <h3>{user.age}</h3>
      <h3>{user.username}</h3>
      <h3>{user.email}</h3>
      <h3>{user.address}</h3>
      <h3>{user.zipcode}</h3>
      <h3>{user.phone}</h3>
      <h3>{user.website}</h3>
      <h3>{user.company}</h3>
    </div>
  )}
    </div>
  );
}

export default UserList;

