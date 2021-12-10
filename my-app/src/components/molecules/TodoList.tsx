import React, {useState} from 'react'

interface TodoListProps {
    list: string[];
    handleDelete: (key: number) => void;
}
const TodoList = (props: TodoListProps): JSX.Element => {
    const {list, handleDelete} = props;
    const [checkedState, setCheckedState] = useState(
        new Array(list.length).fill(false)
    );
    const handleOnChange = (position: number) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);
    }
    return(
        <div className={'m-todo-list'}>
            {
                list?.map((item, index) =>
                <div className={'m-todo-item'} key={index}>
                    <div className={'m-todo-list-checkbox'}>
                        <input type="checkbox" checked={checkedState[index]} value={item} name={item} id={`custom-checkbox-${index}`} onChange={() => handleOnChange(index)}/>
                        <div className={`${checkedState[index] ? 'text-linethrough':''} m-todo-task`}>{item}</div>
                    </div>
                    <div className={'m-todo-list-delete'} onClick={() => handleDelete(index)}>x</div>
                </div>
                )}
        </div>
    )
}
export default TodoList