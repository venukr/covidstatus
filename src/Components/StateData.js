import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Accordion,Card} from 'react-bootstrap';
import {useAccordionToggle as ContextAwareToggle} from 'react-bootstrap/AccordionToggle';
function StateData() {
  const[state,setState]=useState('')

  useEffect(()=>{
  axios.get("https://data.covid19india.org/state_district_wise.json").then((response)=>{
    setState(response.data)
  })
    })


    let keys=Object.keys(state)
  return <div>

      
<h4>list of states in india... </h4>
<Accordion defaultActiveKey="0">
  {
    keys.map((itm,ky)=>{

      let districts=state[itm].districtData
      let district_keys=Object.keys(districts)
let TotalActive=0;
let TotalConfirmed=0;


let TotalDeceased=0;
let TotalRecovered=0;

 let district_list=[]
for( let x in districts)
{
  TotalActive+=districts[x].active
  TotalConfirmed+=districts[x].confirmed
  TotalDeceased+=districts[x].deceased
  TotalRecovered+=districts[x].recovered
  let ob =districts[x]
  ob.district_name=x
  district_list.push(ob)
}

console.log(district_list)

      return(

  
<Card >
  <Card.Header>
    <ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>
  </Card.Header>
  <Accordion.Collapse eventKey="0">
    <Card.Body>{itm} <span className='btn-dark p-1 mr -2'>totalcases -{TotalConfirmed}</span> <span className='btn-dark p-1 mr -2'> Confirmed-{TotalActive}</span> <span className='btn-dark p-1 mr -2'> deaths-{TotalDeceased} </span> <span className='btn-dark p-1 mr -3'> recover-{TotalRecovered}</span> </Card.Body>

  </Accordion.Collapse>
  <Accordion.Collapse eventKey="0">
    <Card.Body>
      <table className='table table-primary table-bordered table-stripped'>
        <thead>
          <tr>
            <td>
              District
            </td>
            <td>
            Active
            </td>
            <td>
             Confirmed
            </td>
            <td>
           Deceased
            </td>
            <td>
          Recovered
            </td>
          </tr>
        </thead>
        <tbody>
     {district_list.map((itm,ky)=>{
       return(
         <tr>
           <td>
             {itm.district_name}
           </td>
           <td>
             {itm.active}
           </td>
           <td>
             {itm.confirmed}
           </td>
           <td>
             {itm.deceased}
           </td>
           <td>
             {itm.recovered}
           </td>
         </tr>
       )
     })}


        </tbody>
      </table>
    </Card.Body>
  </Accordion.Collapse>
</Card>
    )})
  }
</Accordion>




  </div>;
}

export default StateData;
