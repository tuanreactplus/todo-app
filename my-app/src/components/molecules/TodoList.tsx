import React, {useEffect} from 'react'
import {todoType} from "../../type/commonTypes";
import axios from "axios";

interface TodoListProps {
    list: todoType[]
    handleDelete: (key: string) => void,
    handleOnChange: (id: string, isDone: boolean, key: number) => void
}
const TodoList = (props: TodoListProps): JSX.Element => {
    const {list, handleDelete, handleOnChange} = props;
    return(
        <div className={'m-todo-list'}>
            {
                list?.map((item, index) =>
                <div className={'m-todo-item'} key={index}>
                    <div className={'m-todo-list-checkbox'}>
                        <input type="checkbox" checked={item.isDone} value={item.todos} name={item.todos} onChange={() => handleOnChange(item.id, item.isDone, index)}/>
                        <div className={`${item.isDone ? 'text-linethrough':''} m-todo-task`}>{item.todos}</div>
                    </div>
                    <div className={'m-todo-list-delete'} onClick={() => handleDelete(item.id)}>x</div>
                </div>
                )}
        </div>
    )
}
export default TodoList