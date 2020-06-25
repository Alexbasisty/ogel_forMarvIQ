import React from 'react';

const MobileVersion = props => {
    const { data } = props;

    const totalNetProduction = (prod) => {
        return Math.floor(prod.PRODUCTION - prod.PRODUCTION * prod.SCRAP_PERCENTAGE)
    }

    const netProductionHourly = prod => {
        const keys = Object.keys(prod);
        const hours = keys.filter(item => item.includes('H') && item.length < 4)

         return hours        
    }



    return (
        <>
            <h1>The machine 24 hours statuses</h1>
            <ul>
                {data.map((machine, index) => (
                    <li key={index}>
                        <h2>{machine.MACHINE}, date: {machine.DATETIME_FROM.slice(0, 10)}</h2>
                        <div>
                            <strong>The total net production for the machine: </strong> {totalNetProduction(machine)}
                        </div>
                        <div>
                            <strong>The percentage of scrap vs gross production: </strong>
                            {machine.SCRAP_PERCENTAGE.toFixed(7) * 100}%
                        </div>
                        <div>
                            <strong>The percentage of downtime for a machine: </strong>
                            {machine.DOWNTIME_PERCENTAGE.toFixed(7) * 100}%
                        </div>
                        <div>
                            <strong>A list of the net production for every hour: </strong>
                             {netProductionHourly(machine).map((hour, index) => (
                                    <div key={index}>
                                        <strong>{hour}: </strong>
                                        {Math.floor(machine[hour] - machine[hour] * machine.SCRAP_PERCENTAGE)}
                                    </div>
                                ))
                             }
                        </div>                        
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MobileVersion;