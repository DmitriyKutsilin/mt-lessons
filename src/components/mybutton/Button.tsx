import React, {MouseEvent, ReactNode} from 'react';

type ButtonType = {
    children: ReactNode
    callBack: () => void
}
export const Button = ({children, callBack}: ButtonType) => {
    const onClickHandler = () => {
        callBack()
    }

    return (
        <button onClick={onClickHandler}>{children}</button>
    );
};
