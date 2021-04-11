import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import styled from "styled-components";
import './App.css';
import Home from './pages/home/Home';
import Favorite from './pages/favorite/Favorite';
import GamesState from './context/GamesState'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  const Main = styled.div`       
    background-color: #282828;
    color: #9a9687;
    /* background-image: url(); */
    justify-content: space-between;
    min-height: 100vh;
    `;
  return (

    <BrowserRouter>
      <GamesState>
        <div className="App">
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
          <div className="App-main">
            <Main className="container-fluid">
              <Switch>
                <Route path={"/"} component={Home} exact></Route>
                <Route path={"/favorite"} component={Favorite}></Route>
              </Switch>
            </Main>
          </div>
          
        </div>
      </GamesState>
    </BrowserRouter>

  );
}

export default App;


