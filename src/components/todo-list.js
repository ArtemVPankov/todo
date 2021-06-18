import React from 'react';
import TodoListItem from './todo-list-item';


const TodoList = () => {

    const items = ['task 1', 'task 2'];
    return (
        <ul>
            <li><TodoListItem value={ items[0] }/></li>
            <li><TodoListItem value={ items[1] }/></li>
        </ul>
    )
};

export default TodoList;