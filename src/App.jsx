import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase.utility';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

function App() {

  const [userState, setUserState] = useState(null)

  const dispatch = useDispatch()
  dispatch(setCurrentUser(userState))

  let UnsubscribeFromAuth = () => useRef(null)

  useEffect(() => {

    UnsubscribeFromAuth.current = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setUserState({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setUserState(userAuth)
    })

    // same as component will unmount in class component
    return () => {
      UnsubscribeFromAuth()
    }
  }, [])

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  )
}

export default App;
