// @flow 
import * as React from 'react';
import {ChangeEvent, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

type Props = {
    addMessage: (title: string) => void
};


export const FullInput = ({addMessage}: Props) => {
    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement> ) => {
        setTitle(event.currentTarget.value)
    }


    const onClickButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} type="text" onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};