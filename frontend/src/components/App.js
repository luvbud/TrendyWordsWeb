import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from './views/AboutMenu/NavBar';
import Header from './views/AboutMenu/header';
import Home from './views/MainFrame/home';
import About from './views/MainFrame/about';
import TrendyWords from './views/MainFrame/trendywords';
import HardWords from './views/MainFrame/hardwords';
import Login from './views/Login/login';
import NoMatch from './views/NoMatch';
import AddUser from './views/Login/AddUser';
import '../css/Page.css';

// 메인 화면 표시하는 곳
// 컴포넌트 클래스를 가져와 상속하는 방식으로, App 컴포넌트를 만들 수 있다.
class App extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    go = () => {
        this.props.history.go();
    }

    goBack = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div id="mainBody">
                <Router>
                    <div>
                        <NavBar/>
                        <Header/>
                        <Switch>
                            <Route path="/" component={Home} exact={true} />
                            <Route path="/about/:username" component={About}/>
                            <Route path="/trendywords" component={TrendyWords}/>
                            <Route path="/hardwords" component={HardWords}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/add-user" component={AddUser}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;