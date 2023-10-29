import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './index.css'
import Login from './Components/Login';
import Header from './Components/Header';
import Home from './Components/Home'
import Details from "./Components/Details";
function App() { 

  return (
    
  <div className="App">
   <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Details />
          </Route>
        </Switch>
      </Router>

  </div>
  );
}

export default App;
