import React from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Delete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            month: '',
            year: ''
        };

        this.onClick = this
            .onClick
            .bind(this);
        this.delete = this
            .delete
            .bind(this);
    }

    componentDidMount() {
        this.setState(
            {id: this.props.expense.id, month: this.props.expense.month, year: this.props.expense.year}
        )
    }
    componentWillReceiveProps(nextProps) {
        this.setState(
            {id: nextProps.expense.id, month: nextProps.expense.month, year: nextProps.expense.year}
        )
    }
    onClick(e) {
        this.delete(this);
    }
    delete(e) {
        axios
            .delete('http://localhost:8080/trendywords', {
                params: {
                    id: e.state.id
                }
            })
            .then(function (response) {});
    }
    render() {
        return (
            <Button bsStyle="danger" bsSize="small" onClick={this.onClick}>
                <Link
                    to={{
                        pathname: '/trendywords',
                        search: '?month=' + this.state.month + '&year=' + this.state.year
                    }}
                    style={{
                        textDecoration: 'none'
                    }}>
                    <span className="glyphicon glyphicon-remove"></span>
                </Link>
            </Button>
        )
    }
}
export default Delete;
