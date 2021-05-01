import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';

function App() {

  const Hats = () => {
    return(
      <h1>Hats Page</h1>
    )
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/hats' component={Hats}/>
      </Switch>
    </div>
  )
}

export default App;
