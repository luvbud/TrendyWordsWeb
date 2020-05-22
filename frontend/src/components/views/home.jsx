import React, {Component} from 'react';

class Home extends Component {
    async componentDidMount() {
        const response = await fetch('/');
    }

    render() {
        return (<div>
            홈
        </div>);
    }
}

export default Home;
