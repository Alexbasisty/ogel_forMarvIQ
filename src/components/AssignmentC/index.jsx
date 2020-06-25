import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AssignmentC extends Component {
    state = {
        data: [],
        error: '',
    }

    componentDidMount() {
        const url = `https://www.marviq.com/assessment/index.php?page=c&from=2018-01-07%2000:00:00`;
        fetch(url)
            .then(resp => resp.json())
            .then(data => this.setState({
                data
            }))
            .catch(error => this.setState({error}));
    }

    render() {
        const { data, error } = this.state;

        return (
            <>
            <p>{error}</p>
            <h1>The OEE (Overall Equipment Efficiency) for every machine over the last 24 hours</h1>
            <ul>
            {data.map((item, index) => (
                <li key={index}>
                    <h2>{item.MACHINE}, on the date {item.DATETIME_FROM.slice(0, 10)}</h2>
                    <div>
                        <strong>Performance (actual gross production/norm gross production): </strong>
                        {item.PERFORMANCE * 100}%
                    </div>
                    <div>
                        <strong>Availability (actual uptime/norm uptime): </strong>
                        {item.AVAILABILITY * 100}%
                    </div>
                    <div>
                        <strong>Quality ((actual gross production - actual scrap)/actual gross production): </strong>
                        {item.QUALITY * 100}%
                    </div>
                    <div>
                        <strong>Overall Equipment Efficiency: </strong>
                        {item.OEE * 100}%
                    </div>
                </li>
            ))}    
            </ul>            
            </>

        )
    }
}

const TaskCLink = () => (
    <Link to="/assign/c">AssignmentC</Link>
)

export default AssignmentC;

export { TaskCLink };