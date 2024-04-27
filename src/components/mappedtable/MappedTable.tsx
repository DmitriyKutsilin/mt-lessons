import React from 'react';

type TopCarsProps = {
    manufacturer: string
    model: string
}

export const topCars: TopCarsProps[] = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]

type MappedTableProps = {
    cars: TopCarsProps[]
}


export const MappedTable = ({cars}: MappedTableProps) => {
    const carsRow = cars.length === 0

    return (
        carsRow
            ? <span>No cars</span>
            : <table>
                <thead>
                <tr>
                    <th>Place</th>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
                </thead>
                <tbody>
                {
                    cars.map((car, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{car.manufacturer}</td>
                                <td>{car.model}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
    );
};
