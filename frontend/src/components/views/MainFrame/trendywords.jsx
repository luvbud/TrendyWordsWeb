import React, {Component} from 'react';
import {Tab, Tabs} from 'react-bootstrap';

import Add from '../../Add';
import Update from '../../Update';
import Delete from '../../Delete';
import YearTabsRouter from '../../tabs/yearTabsRouter';
import MonthTabs from '../../tabs/monthTabs';
import '../../../css/App.css';
import '../../../css/menu.css';

import Typography from "@material-ui/core/Typography";
import axios from 'axios';
import {links} from '../../link';

class TrendyWords extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedMonth: 'All', selectedYear: 2016, data: [], activeTab: 2016};
        this.getData = this.getData.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.history.location.search) {
            let search = nextProps.history.location.search;
            search = search.substring(1);
            let searchObj = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
            this.setState({activeTab: parseInt(searchObj.year, 10)});
            this.setState({selectedYear: searchObj.year});
            this.setState({selectedMonth: searchObj.month});

            this.getData(this, searchObj.year, searchObj.month);
        } else {
            this.getData(this, 2016, 'All');
        }
    }

    componentDidMount() {
        console.log("mounted");
    }

    componentWillUnmount() {
        console.log("unmounted");
    }

    handleSelect(selectedTab) {
        this.setState({
            activeTab: selectedTab,
            selectedYear: selectedTab
        });
    }

    getData(ev, year, month) {
        axios.get(links.serverLink + 'trendywords/' + year + '/' + month)
            .then(function (response) {
                ev.setState({data: response.data});
                ev.setState({selectedYear: parseInt(year, 10)});
                ev.setState({selectedMonth: month});
            });
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={headCss}>TrendyWords</Typography>
                <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
                    <Tab eventKey={2016} title={<YearTabsRouter year='2016'/>}>
                        <MonthTabs year='2016' monthlyActiveTab={this.state.selectedMonth}/>
                    </Tab>
                    <Tab eventKey={2017} title={<YearTabsRouter year='2017'/>}>
                        <MonthTabs year='2017' monthlyActiveTab={this.state.selectedMonth}/>
                    </Tab>
                    <Tab eventKey={2018} title={<YearTabsRouter year='2018'/>}>
                        <MonthTabs year='2018' monthlyActiveTab={this.state.selectedMonth}/>
                    </Tab>
                    <Tab eventKey={2019} title={<YearTabsRouter year='2019'/>}>
                        <MonthTabs year='2019' monthlyActiveTab={this.state.selectedMonth}/>
                    </Tab>
                    <Tab eventKey={2020} title={<YearTabsRouter year='2020'/>}>
                        <MonthTabs year='2020' monthlyActiveTab={this.state.selectedMonth}/>
                    </Tab>
                </Tabs>
                <Add selectedMonth={this.state.selectedMonth} selectedYear={this.state.selectedYear}/>
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th className='desc-col'>Description</th>
                        <th className='button-col'>Amount</th>
                        <th className='button-col'>Month</th>
                        <th className='button-col'>Year</th>
                        <th className='button-col'>Update</th>
                        <th className='button-col'>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map((exp) => {
                            return <tr>
                                <td className='counterCell'></td>
                                <td className='desc-col'>{exp.description}</td>
                                <td className='button-col'>{exp.amount}</td>
                                <td className='button-col'>{exp.month}</td>
                                <td className='button-col'>{exp.year}</td>
                                <td className='button-col'><Update expense={exp}/></td>
                                <td className='button-col'><Delete expense={exp}/></td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

const headCss = {
    fontFamily: 'Pacifico, cursive',
    fontSize: '34px',
    marginTop: '80px',
    marginBottom: '20px',
    justifyContent: 'center',
    display: 'flex'
};

export default TrendyWords;