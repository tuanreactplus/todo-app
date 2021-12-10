import React, {ReactNode} from 'react';

interface ButtonProps {
    handleClick?: () => void,
    title?: string,
    children?:ReactNode
}
const Button = (props: ButtonProps):JSX.Element => {
    const { handleClick, children} = props;
    return(
        <div className={'a-button'} onClick={handleClick}>{children}</div>
    )
}
export {Button}