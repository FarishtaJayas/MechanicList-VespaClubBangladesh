import logo from './assets/logo.png';
import './App.css';
import {Home} from './Home';
import {Mechanic} from './Mechanic';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
    <div className="App container">
    <img src={logo} alt="logo" />
      <div className="navigation">
      
      <h5 className="d-flex justify-content m-2">Vespa Club Bangladesh</h5>
      
      </div>
      <h5 className="d-flex justify-content m-2">Mechanic List</h5>
      
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-warning btn-outline-danger " to="/home">
              Home
            </NavLink>
            </li>
            <li className="nav-item- m-1">
            <NavLink className="btn btn-warning btn-outline-danger" to="/mechanic">
              Mechanic
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/mechanic' component={Mechanic}/>
        
      </Switch>  
    </div>
  </BrowserRouter>
  );
  
}

export default App;
