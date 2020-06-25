import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AssignmentB extends Component {
    state = {
        data: {},
        error: '',
    }

    componentDidMount() {
        const url = `https://www.marviq.com/assessment/index.php?page=b&from=2018-01-07%2000:00:00`;
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
                <h1>Status of the machine based on it’s core temperature over de last 24 hours</h1>
                <div className="machine-status">
                <p>{error}</p>
                {Object.keys(data).map((keyName, i) => (
                    <div 
                        key={i} 
                        className={data[keyName].split('/')[0]}
                        >
                            <span>{data[keyName].split('/')[0]}</span>
                            <h2>{keyName}</h2>
                    </div>
                ))}
            </div>
            </>

        )
    }
}

const TaskBLink = () => (
    <Link to="/assign/b">AssignmentB</Link>
)

export default AssignmentB;

export { TaskBLink };