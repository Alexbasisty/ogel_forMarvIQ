import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import MobileVersion from './MobileVersion';
import DesktopVersion from './DesktopVersion';

const AssignmentA = () => {
    
    const [state, setState] = useState({
        data: [],
        error: '',    
    });

    const isDesktop = useMediaQuery({
        query: '(min-width: 800px)'
    });

    useEffect(() => {
        const url = `https://www.marviq.com/assessment/index.php?page=a&from=2018-01-07%2000:00:00`;
        fetch(url)
            .then(resp => resp.json())
            .then(data => setState(prevState => {
                return {
                    ...prevState,
                    data: data,
                }
            }))
            .catch(error => setState(prevState => {
                return {
                    ...prevState,
                    error: error
                }
            }));
    })

        return (
            <>
                <h1>The machine 24 hours statuses</h1>
                {isDesktop 
                ? 
                <DesktopVersion data={state.data} />
                :
                <MobileVersion data={state.data} /> 
            }   
            </>
        )
}

const TaskALink = () => (
    <Link to="/assign/a">AssignmentA</Link>
)

export default AssignmentA;
export { TaskALink };
