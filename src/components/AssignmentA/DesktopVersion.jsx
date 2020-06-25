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
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Machine, date</th>
                        <th>The total net production for the machine</th>
                        <th>The percentage of scrap vs gross production</th>
                        <th>The percentage of downtime for a machine</th>
                        <th>A list of the net production for every hour</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((machine,index) => (
                        <tr key={index}>
                            <td>{machine.MACHINE}, {machine.DATETIME_FROM.slice(0, 10)}</td>
                            <td>{totalNetProduction(machine)}</td>
                            <td>{machine.SCRAP_PERCENTAGE.toFixed(7) * 100}%</td>
                            <td>{machine.DOWNTIME_PERCENTAGE.toFixed(7) * 100}%</td>
                            <td>
                                {netProductionHourly(machine).map((hour, index) => (
                                    <div key={index}>
                                        <strong>{hour}: </strong>
                                        {Math.floor(machine[hour] - machine[hour] * machine.SCRAP_PERCENTAGE)}
                                    </div>
                                ))}
                             </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    )
}

export default MobileVersion;