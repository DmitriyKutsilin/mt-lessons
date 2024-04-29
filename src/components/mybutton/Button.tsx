import React, {MouseEvent} from 'react';

type ButtonType = {
    title: string
    callBack: () => void
}
export const Button = ({title, callBack}: ButtonType) => {
    const onClickHandler = () => {
        callBack()
    }

    return (
        <button onClick={onClickHandler}>{title}</button>
    );
};
