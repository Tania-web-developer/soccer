import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/home/Home';
import Favorite from './pages/favorite/Favorite';
import GamesState from './context/GamesState'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (

    <BrowserRouter>
      <GamesState>
        <div className="App">
          <header className="App-header container-fluid bg-secondary">
            <Navbar className="justify-content-center" variant="dark">
              <Nav variant="dark" activeKey="/home">
                <Nav.Item>
                  <NavLink className="nav-link" exact to={"/"}>Home</NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className="nav-link" to={"/favorite"}>Favorite games</NavLink>
                </Nav.Item>
              </Nav>
            </Navbar>
          </header>
          <div className="App-main">
            <Switch>
              <Route path={"/"}  component={Home}  exact></Route>
              <Route path={"/favorite"} component={Favorite}></Route>
            </Switch>
          </div>
        </div>
      </GamesState>
    </BrowserRouter>

  );
}

export default App;


