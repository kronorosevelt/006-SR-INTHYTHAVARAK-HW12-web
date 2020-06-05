import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Home from './components/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Video from './components/Video';
import Account from './components/Account';
import Authen from './components/Authen';
import Main from './components/Main';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Router>
      <Menu />
      <Switch>
      <Route path='/' exact component={Main}/>
        <Route path='/Home'  component={Home}/>
        <Route path='/video/' exact component={Video}/>
        <Route path='/video/:id' exact component={Video}/>
        <Route path='/video/:id/:catergory' exact component={Video}/>
        <Route path='/Account' component={Account}/>
        <Route path='/Authen' component={Authen}/>
        <Route path='/welcome' component={Welcome}/>

      </Switch>
      </Router>
    
    
    </div>
  );
}
export default App;
