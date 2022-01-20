import React, { useEffect, useState } from 'react';
import axios from 'axios';

function World()

{
const[state,setState]=useState([])
  useEffect(()=>{
    axios.get("https://corona.lmao.ninja/v2/countries").then((response)=>{
      //console.log(response.data);
      setState(response.data)
    })
  },[])
  
  return <div className='row'>
    <div className='col-md-12'>
   <table className='table table-primary table-borded table-stripped'>
     <thead>
       <tr>
         <td>
        Country

         </td>
         <td>
   Total Cases
         </td>
      
       <td>
       Recovered

         </td>
         <td>
   Deaths

         </td>
         </tr>
     </thead>
     <tbody>
       {
         state.map((itm,ky)=>{
           return(
           <tr>
             <td>
               {itm.country} 
               <img style={{width:'64px',marginLeft:'10px' }} src={itm.countryInfo.flag}/>
             </td>
             <td>
               {itm.cases}
             </td>
             <td>
               {itm.recovered}
             </td>
             <td>
               {itm.deaths}
             </td>
           </tr>
           )
         })
       }
     </tbody>
   </table>
    </div>

  </div>;
}

export default World;
