import { Link } from "react-router-dom";

export const Nav = ()=>{
   const nav =[{
        tittle:"Home" , reg:"/"
    },{
        tittle:"About" , reg:"/about"
    },{
        tittle:"Users" , reg:"/users"
    }]

    return<nav>
         {
            nav.map((e,i)=>{
               return <Link key={i} to={e.reg} style={{margin:"10px"}} >{e.tittle}</Link>
            })
        }
    </nav>
       
    
}