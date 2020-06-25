import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MobileVersion from './MobileVersion';
import DesktopVersion from './DesktopVersion';

class AssignmentA extends Component {
    state = {
        data: [],
        error: '',
        
    };

    componentDidMount() {
        const url = `https://www.marviq.com/assessment/index.php?page=a&from=2018-01-07%2000:00:00`;
        fetch(url)
            .then(resp => resp.json())
            .then(data => this.setState({
                data
            }))
            .catch(error => this.setState({error}))
    }

    render() {
        // return <MobileVersion data={this.state.data} />
        return (
            <>
                <h1>The machine 24 hours statuses</h1>
                <DesktopVersion data={this.state.data} />   
            </>
        )
    }
}

const TaskALink = () => (
    <Link to="/assign/a">AssignmentA</Link>
)

export default AssignmentA;
export { TaskALink };
