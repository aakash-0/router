import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export const User = ()=>{
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get("https://reqres.in/api/users").then(({ data })=>{
         setUsers(data.data)
        })
    },[])
    return <div>
        {users.map((e,i)=>{
         return   <p key={i} >
             <Link to={`/users/${e.id}`}>
             {e.id}. {e.first_name}
             </Link>
                
            </p>
        })}
    </div>
}