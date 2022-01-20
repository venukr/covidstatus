import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


import {
	BrowserRouter as Router,
  Switch,
	Route,
	Link
} from 'react-router-dom';



function Header() {
  return <div>
<>
  <Navbar bg="dark" variant="dark">
    <Container>
    
    <Nav className="me-auto">
   
      <Link className='nav-link' to="/india">india</Link>
      <Link className='nav-link' to="/world">world</Link>
    </Nav>
    </Container>
  </Navbar>
 
 
</>
  </div>;
}

export default Header;
