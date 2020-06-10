import React, {Component} from 'react';

class LogInfo extends Component {
    constructor() {
        super();
        this.state = {name: ''};
    }

    componentDidMount() {
        console.log("LogInfo mounted");
    }

    componentWillUnMount() {
        console.log("LogInfo Unmounted");
    }

    render(){
        return (
            "hello"
        );
    }
}

export default LogInfo;