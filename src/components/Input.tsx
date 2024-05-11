// @flow 
import * as React from 'react';
import {ChangeEvent, KeyboardEvent} from "react";

type Props = {
    title: string
    setTitle: (title: string) => void
    addMessage: () => void
};
export const Input = ({setTitle, title, addMessage}: Props) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement> & KeyboardEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setTitle(event.currentTarget.value)
            addMessage()
        }
    }

    return (
        <input value={title} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
    );
};