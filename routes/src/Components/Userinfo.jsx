import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

export const UserInfo=()=>{
    const [users,setUsers]=useState([]);
    const { id } = useParams();
    useEffect(()=>{
        axios.get(`https://reqres.in/api/users/${id}`).then(({ data })=>{
         setUsers(data.data)
        })
    },[])
   
    
    return <>
    <img src={users.avatar} alt={`${users.first_name}`}></img>
   <p> user Id: {id}</p>
    </>
}