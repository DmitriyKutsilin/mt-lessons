import React from 'react';

type FilterHWType = {
    money: MoneyType[]
    filter: Function
}

export type MoneyType = {
    banknots: string
    value: number
    number: string
}

export const FilterHw = ({money, filter}: FilterHWType) => {
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>Banknots</th>
                    <th>Value</th>
                    <th>Number</th>
                </tr>
                </thead>
                <tbody>
                {
                    money.map(({banknots, value, number}: MoneyType, index) => {
                        return (
                            <tr key={index}>
                                <td>{banknots}</td>
                                <td>{value}</td>
                                <td>{number}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <div>
                <button onClick={() => filter('all')}>All</button>
                <button onClick={() => filter('rubles')}>Rubles</button>
                <button onClick={() => filter('dollars')}>Dollars</button>
            </div>
        </>
    );
};
