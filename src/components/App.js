import React from 'react';
import NavBar from './Nav.js';
import PlantTree from '../components/PlantTree'
import Footer from '../components/Footer';
import '../styles/App.css'
import '../styles/Footer.css'
import '../styles/PlantTree.css'
import Facts from './Facts'
import Inspiration from './Inspiration';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
      <BrowserRouter>
        <NavBar />
        <Footer />
        <Switch>
          <Route exact path="/" component={Facts} /> 
          <Route exact path="/PlantTree" component={PlantTree} />
          <Route exact path="/Inspiration" component={Inspiration} />
        </Switch>
      </BrowserRouter>  
  );
}

export default App;






