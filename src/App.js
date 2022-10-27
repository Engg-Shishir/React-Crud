import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './layout/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PagenotFound from './components/pages/Pagenotfound';
import Add from './users/Add';
import Edit from './users/Edit';
import View from './users/View';


function App() {
  return (
   <Router> 
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={Add} />
          <Route exact path="/users/edit/:id" component={Edit} />
          <Route exact path="/users/:id" component={View} />
          <Route  component={PagenotFound} />
        </Switch>
      </div>
   </Router>
  );
}

export default App;


// start 1:10
