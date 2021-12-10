import React from 'react';

interface InputProps {
    value: string
    onChange: (e: any) => void
    placeholder?: string
}
const Input = (props: InputProps):JSX.Element => {
    const {value, onChange, placeholder} = props;
    return (
        <input className={'a-input'} type="text" value={value} onChange={onChange} placeholder={placeholder} />
    )
}
export {Input}