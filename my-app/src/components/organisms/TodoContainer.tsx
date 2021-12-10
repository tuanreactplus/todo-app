import React from 'react'
import {TodoHeader} from "../molecules/TodoHeader";
import TodoList from "../molecules/TodoList";

const TodoContainer = ():JSX.Element => {
    const [tasks, setTasks] = React.useState<string[]>([]);
    const [isSubmit, setIsSubmit] = React.useState<boolean>(false);
    const handleSubmit = (value: string):void => {
        if(tasks.indexOf(value) === -1){
            if(value.trim().length > 0) {
                setTasks([...tasks, value])
                setIsSubmit(!isSubmit);
            }
        }
    }
    const handleDelete = (index: number):void => {
        const contact = tasks.filter((item,key) => key !== index);
        setTasks(contact)
    }
    return(
        <div className={'o-todo'}>

            <TodoHeader handleSubmit={handleSubmit} isSubmit={isSubmit} />
            <TodoList list={tasks} handleDelete={handleDelete} />
        </div>
    )
}
export {TodoContainer}