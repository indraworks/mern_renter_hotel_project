import React from 'react';
import Header from './components/shared/Header';
import RentalHome from './pages/RentalHome';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const App = () => {
  //explain native routing
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <RentalHome />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/Register'>
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

/*
asal muasal routing itu aslinya dari broeser widow.location 
dimana merupakan pathname 
kalau kita console  window object di browser
misal di borwser kit aketik 
http:localhost:3000/login

> window.location.pathname
,aka hasil akan muncul :"/login"
nah kit apakai ini utk routing pindah halaman page di react
ini kalau pure kalau pake framwork silahkan install react-router-dom
hasil:
window.location.pathname
"/login"
nah ini kitapakai nanti dimasukan ke render page function utk
ditangani switch 


*/

/*
dibuat latihan sndri kalau mau buat native routing 
const renderPages = () => {
    const { pathname } = window.location;
   debugger;
    switch (pathname) {
      case '/':
        return <RentalHome />;
      case '/login':
        return <Login />;
      case '/register':
        return <Register />;
      default:
        return <RentalHome />;
    }
  };

  return (
    <div>
      <Header />
      {renderPages()}
    </div>
  );



*/
