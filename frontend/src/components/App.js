import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from "./views/NavBar";
import Header from './views/header';
import Home from './views/home';
import About from './views/about';
import TrendyWords from './views/trendywords';
import HardWords from './views/hardwords';
import Login from './views/login';
import NoMatch from './views/NoMatch';
import AddUser from './AddUser';
import Container from '@material-ui/core/Container';

class App extends React.Component {
    render() {
        return (
            
            <Container>
                <Router>
                <div> 
                    <NavBar />
                    <Header />
                    <Switch> 
                        <Route exact path="/" component={Home}/> 
                        <Route path="/about/:username" component={About}/>
                        <Route path="/trendywords" component={TrendyWords}/>
                        <Route path="/hardwords" component={HardWords}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/add-user" component={AddUser}/>
                        <Route component={NoMatch}/>
                    </Switch>
                    </div>
            </Router>
            </Container>
            

        );
    }
}

export default App;