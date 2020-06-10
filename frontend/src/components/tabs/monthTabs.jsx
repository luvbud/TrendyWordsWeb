import React from 'react';
import {Tab, Tabs} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class MonthTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: ''};
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({activeTab: this.props.year + '-' + nextProps.monthlyActiveTab});
    }

    handleSelect(selectedTab) {
        this.setState({
            activeTab: selectedTab
        });

        let infos = selectedTab.split('-');
    }

    render() {
        return <Tabs activeKey={this.state.activeTab} component={Link} onSelect={this.handleSelect}>
            <Tab eventKey={this.props.year + '-All'} title={this.props.year + ' All'}/>
            <Tab eventKey={this.props.year + '-Jan'} title={this.props.year + ' 1'} />
            <Tab eventKey={this.props.year + '-Feb'} title={this.props.year + ' 2'}
                 link={{pathname: '/trendywords', search: '?month=' + this.props.tabId + '&year=' + this.props.year}} />
            <Tab eventKey={this.props.year + '-Mar'} title={this.props.year + ' 3'}
                 link={{pathname: '/trendywords', search: '?month=' + this.props.tabId + '&year=' + this.props.year}} />
            <Tab eventKey={this.props.year + '-Apr'} title={this.props.year + ' 4'}
                 link={{pathname: '/trendywords', search: '?month=' + this.props.tabId + '&year=' + this.props.year}} />
            <Tab eventKey={this.props.year + '-May'} title={this.props.year + ' 5'}
                 link={{pathname: '/trendywords', search: '?month=' + this.props.tabId + '&year=' + this.props.year}} />
            <Tab eventKey={this.props.year + '-Jun'} title={this.props.year + ' 6'}
                 link={{pathname: '/trendywords', search: '?month=' + this.props.tabId + '&year=' + this.props.year}} />
            <Tab eventKey={this.props.year + '-Jul'} title={this.props.year + ' 7'}
                 link={{pathname: '/trendywords', search: '?month=' + this.props.tabId + '&year=' + this.props.year}} />
            <Tab eventKey={this.props.year + '-Aug'} title={this.props.year + ' 8'}
                 link={{pathname: '/trendywords', search: '?month=' + this.props.tabId + '&year=' + this.props.year}} />
            <Tab eventKey={this.props.year + '-Sep'} title={this.props.year + ' 9'}
                 link={{pathname: '/trendywords', search: '?month=' + this.props.tabId + '&year=' + this.props.year}}/>
            <Tab eventKey={this.props.year + '-Oct'} title={this.props.year + ' 10'}
                 link={{pathname: '/trendywords', search: '?month=' + this.props.tabId + '&year=' + this.props.year}}/>
            <Tab eventKey={this.props.year + '-Nov'} title={this.props.year + ' 11'}
                 link={{pathname: '/trendywords', search: '?month=' + this.props.tabId + '&year=' + this.props.year}}/>
            <Tab eventKey={this.props.year + '-Dec'} title={this.props.year + ' 12'}
                 link={{pathname: '/trendywords', search: '?month=' + this.props.tabId + '&year=' + this.props.year}}/>
        </Tabs>
    }
}

export default MonthTabs;

{/*<Tab eventKey={this.props.year + '-All'} title={<MonthTabsRouter tabId='All' year={this.props.year}/>}/>*/
}
{/*<Tab eventKey={this.props.year + '-Jan'} title={<MonthTabsRouter tabId='Jan' year={this.props.year}/>}/>*/
}
{/*<Tab eventKey={this.props.year + '-Feb'} title={<MonthTabsRouter tabId='Feb' year={this.props.year}/>}/>*/
}
{/*<Tab eventKey={this.props.year + '-Mar'} title={<MonthTabsRouter tabId='Mar' year={this.props.year}/>}/>*/
}
{/*<Tab eventKey={this.props.year + '-Apr'} title={<MonthTabsRouter tabId='Apr' year={this.props.year}/>}/>*/
}
{/*<Tab eventKey={this.props.year + '-May'} title={<MonthTabsRouter tabId='May' year={this.props.year}/>}/>*/
}
{/*<Tab eventKey={this.props.year + '-Jun'} title={<MonthTabsRouter tabId='Jun' year={this.props.year}/>}/>*/
}
{/*<Tab eventKey={this.props.year + '-Jul'} title={<MonthTabsRouter tabId='Jul' year={this.props.year}/>}/>*/
}
{/*<Tab eventKey={this.props.year + '-Aug'} title={<MonthTabsRouter tabId='Aug' year={this.props.year}/>}/>*/
}
{/*<Tab eventKey={this.props.year + '-Sep'} title={<MonthTabsRouter tabId='Sep' year={this.props.year}/>}/>*/
}
{/*<Tab eventKey={this.props.year + '-Oct'} title={<MonthTabsRouter tabId='Oct' year={this.props.year}/>}/>*/
}
{/*<Tab eventKey={this.props.year + '-Nov'} title={<MonthTabsRouter tabId='Nov' year={this.props.year}/>}/>*/
}
{/*<Tab eventKey={this.props.year + '-Dec'} title={<MonthTabsRouter tabId='Dec' year={this.props.year}/>}/>*/
}
