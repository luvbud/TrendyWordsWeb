import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './views/header';
import Home from './views/home';
import About from './views/about';
import TrendyWords from './views/trendywords';
import HardWords from './views/hardwords';
import Login from './views/login';
import NoMatch from './views/NoMatch';
import AddUser from './AddUser';

class App extends React.Component {
    render() {
  return (
    <Router>
        <div> 
            <Header />
            <Switch> 
                <Route exact path="/" component={Home}/> 
                <Route path="/about/:username" component={About}/>
                <Route path="/trendywords" component={TrendyWords}/>
                <Route path="/hardwords" component={HardWords}/>
                <Route path="/login" component={Login}/>
                <Route component={NoMatch}/>
                <Route path="/add-user" component={AddUser}/>
            </Switch>
        </div>
    </Router>
 );
}
}

export default App;