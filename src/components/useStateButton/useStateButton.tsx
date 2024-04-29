import React, {useState} from 'react';

export const UseStateButton = () => {
    let [a, setA] = useState(0);

    const onClickHandler = () => {
        setA(a += 1);
        console.log(a)
    }

    const onClickHandlerReset = () => {
        setA(a = 0);
        console.log(a)
    }

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>increase</button>
            <button onClick={onClickHandlerReset}>X</button>
        </div>
    );
};
