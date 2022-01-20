import React, { useEffect, useState } from 'react';
import {Card} from 'react-bootstrap';
import StateData from './StateData';
import axios from 'axios';


function India() {
  const[state,setState]=useState({})
  useEffect(()=>{
    axios.get("https://corona.lmao.ninja/v2/countries/india").then((response)=>{
      setState(response.data)
      
    })
  })
  return <div className='row'>
    <div className="col-md-3">        
<Card bg="info">
  <Card.Header></Card.Header>
  <Card.Body  className="text-center">
    <Card.Title>ACTIVE</Card.Title>
    <Card.Text>
  {state.cases}
    </Card.Text>  
  </Card.Body>
</Card>
    </div>
  
            <div className="col-md-3">        
        <Card  bg="warning">
          <Card.Header></Card.Header>
          <Card.Body  className="text-center">
            <Card.Title>CONFIRMED</Card.Title>
            <Card.Text>
        {state.active}
            </Card.Text>
          
          </Card.Body>
        </Card>
            </div>
            <div className="col-md-3">        
        <Card bg="danger">
          <Card.Header></Card.Header>
          <Card.Body  className="text-center">
            <Card.Title>DECEASED</Card.Title>
            <Card.Text>
             {state.deaths}
            </Card.Text>
          
          </Card.Body>
        </Card>
        </div>
        <div className="col-md-3">        
        <Card bg="success">
          <Card.Header></Card.Header>
          <Card.Body  className="text-center">
            <Card.Title>RECOVERED</Card.Title>
            <Card.Text>
            {state.recovered}
            </Card.Text>
          
          </Card.Body>
        </Card>
            </div>
            
            <div className='col-md-12'>

                
                    <StateData/>
                  
                    
        
            </div>
         


  </div>;
}

export default India;
