import React, {useEffect} from 'react'
import {Input} from "../atoms/Input";
import {Button} from "../atoms/Button";

interface TodoHeaderProps{
    handleSubmit: (value: string) => void
    isSubmit: boolean
}

const TodoHeader = (props: TodoHeaderProps):JSX.Element => {
    const {handleSubmit, isSubmit} = props;
    const [value, setValue] = React.useState<string>('');
    useEffect(() => {
        setValue('')
    },[isSubmit]);
    return (
        <div className={'m-todo-header-title'}>
            <div className={'m-task'}>
                Tuan's Task
            </div>
            <div className={'m-todo-header-right'}>
                <Input placeholder={'Add task here'} value={value} onChange={e => setValue(e.target.value)} />
                <Button handleClick={() => handleSubmit(value)}>+</Button>
            </div>
        </div>
    )
}
export {TodoHeader}