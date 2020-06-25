import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MobileVersion from './MobileVersion';
import DesktopVersion from './DesktopVersion';

class AssignmentA extends Component {
    state = {
        data: [],
        error: '',
        isDesktop: true,        
    };

    checkIsDesktop(event) {
            const width = event.currentTarget.innerWidth;

            if (width > 800) {
                this.setState({
                    isDesktop: true
                })
            } else {
                this.setState({
                    isDesktop: false
                })
            }
    }

    componentDidMount() {
        const url = `https://www.marviq.com/assessment/index.php?page=a&from=2018-01-07%2000:00:00`;
        fetch(url)
            .then(resp => resp.json())
            .then(data => this.setState({
                data
            }))
            .catch(error => this.setState({error}));

            window.addEventListener('resize', (event) => this.checkIsDesktop(event))
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.checkIsDesktop)
    }

    render() {
        return (
            <>
                <h1>The machine 24 hours statuses</h1>
                {this.state.isDesktop 
                ? 
                <DesktopVersion data={this.state.data} />
                :
                <MobileVersion data={this.state.data} /> 
            }   
            </>
        )
    }
}

const TaskALink = () => (
    <Link to="/assign/a">AssignmentA</Link>
)

export default AssignmentA;
export { TaskALink };
