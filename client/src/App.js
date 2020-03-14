import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import  Header  from './page/Header';
import Home from '../src/page/Home'
import AppState from '../src/context/AppState';
import Footer from './page/Footer'

function App() {
  return (
    <AppState>
       <Router>
       <div class="card text-center" style={{width: '30rem',margin:'auto'}}>
          <Header/>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
    
          <Footer/>
          </div>
        </Router>

    </AppState>
  );
}

export default App;
