import React, { Component } from 'react';

class MachineStatus  extends Component {
    state = {
        data: []
    };

    componentDidMount() {
        const url = `https://www.marviq.com/assessment/index.php?page=a&from=2018-01-07%2000:00:00`;
        fetch(url)
            .then(resp => resp.json())
            .then(data => this.setState({
                data
            }))
    }

    render() {
        return (
            <div>
                machine MachineStatus
                <button onClick={() => console.log(this.state.data)} >Klik</button>
            </div>
        )
    }
};

export default MachineStatus;