import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import { auth } from './firebase/firebase.utility';

function App() {

  const [currentUser, setCurrentUser] = useState('');

  let unsubscribeFromAuth = useRef(null);

  useEffect(() => {
 
    unsubscribeFromAuth.current = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    // same as component will unmount in class component
    return () => {
      unsubscribeFromAuth()
    }

  }, [])

  console.log(currentUser);

  return (
    <div className="App">
      <Header currentUser={ currentUser }/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  )
}

export default App;
