import Header from './Components/Header';
import India from './Components/India';
import World from './Components/World';
import './App.css';

import {
	BrowserRouter as Router,
  Switch,
	Route,
	Link
} from 'react-router-dom';





function App() {
  return (

   <div>

<Router>
  <Header/>
  <Switch>

  <Route exact path="/">
    <India/>
  </Route>

  <Route  path="/india">
    <India/>
  </Route>
  <Route path="/world">
    <World/>
  </Route>
  </Switch>
</Router>

   </div>
  );
}

export default App;
