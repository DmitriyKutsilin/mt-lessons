import React, {useState} from 'react';
import {FilterHw} from "./FilterHW";

export const FilteredListTask = () => {
    const [money, setMoney] = useState<MoneyType[]>([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    type MoneyType = {
        banknots: string
        value: number
        number: string
    }

    type FilterType = 'all' | 'dollars' | 'rubles'

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money

    if (filter === 'rubles') {
        currentMoney = money.filter(({banknots, value, number}: MoneyType) => banknots === 'RUBLS')
    }
    if (filter === 'dollars') {
        currentMoney = money.filter(({banknots, value, number}: MoneyType) => banknots === 'Dollars')
    }

    const onClickFilterHandler = (name: FilterType) => {
        setFilter(name)
    }

    return (
        <>
            {/*<FilterHw money={currentMoney} filter={onClickFilterHandler}/>*/}
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
                    currentMoney.map(({banknots, value, number}: MoneyType, index) => {
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
                <button onClick={() => onClickFilterHandler('all')}>All</button>
                <button onClick={() => onClickFilterHandler('rubles')}>Rubles</button>
                <button onClick={() => onClickFilterHandler('dollars')}>Dollars</button>
            </div>
        </>


        // <ul>
        //     {money.map(({banknots, value, number}: MoneyType) => {
        //         return (
        //             <li>
        //                 <span>{banknots} </span>
        //                 <span>{value} </span>
        //                 <span>{number} </span>
        //             </li>
        //         )
        //     })
        //     }
        // </ul>


    );
};