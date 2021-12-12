import React, {useEffect} from 'react'
import {TodoHeader} from "../molecules/TodoHeader";
import TodoList from "../molecules/TodoList";
import axios from "axios";
import {todoType} from "../../type/commonTypes";

const TodoContainer = ():JSX.Element => {
    const [task, setTask] = React.useState<todoType>({id: '', todos: '', isDone: false});
    const [todoList, setTodoList] = React.useState<todoType[]>([]);
    const [isSubmit, setIsSubmit] = React.useState<boolean>(false);

    const handleSubmit = (value: string):void => {
        if(todoList.indexOf(task) === -1){
            if(task.todos.trim().length > 0) {
                axios.post(`https://61b3b03eaf5ff70017ca2054.mockapi.io/api/todos`, {todos: value})
                    .then(res => {
                        setTodoList([...todoList, res.data])
                        setIsSubmit(!isSubmit);
                    })
                    .catch(error => console.log(error));
            }
        }
        setTask({
            id: Math.random().toString(),
            todos: value,
            isDone: false
        })
    }
    const handleDelete = (id: string):void => {
        let deleteItem;
        axios.delete(`https://61b3b03eaf5ff70017ca2054.mockapi.io/api/todos/${id}`)
            .then(res => {
                deleteItem = res.data
            })
        const contact = todoList.filter((item) => item.id !== id);
        setTodoList(contact)
    }
    const handleOnChange = (id: string, isDone: boolean, key: number) => {
        axios.put(`https://61b3b03eaf5ff70017ca2054.mockapi.io/api/todos/${id}`, { isDone: !isDone })
            .then(res => {
                todoList.splice(key,1,res.data);
                setTask(res.data);
            })
    }
    useEffect(() => {
        axios.get(`https://61b3b03eaf5ff70017ca2054.mockapi.io/api/todos`)
            .then(res => {
                setTodoList(res.data);
            })
            .catch(error => console.log(error));
    },[task])
    return(
        <div className={'o-todo'}>
            <TodoHeader handleSubmit={handleSubmit} isSubmit={isSubmit} />
            <TodoList list={todoList} handleDelete={handleDelete} handleOnChange={handleOnChange} />
        </div>
    )
}
export {TodoContainer}