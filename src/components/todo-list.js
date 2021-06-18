import React from 'react';
import TodoListItem from './todo-list-item';


const TodoList = ( { data } ) => {

    const dataArr = data.map(( item ) => {
        return (
            <li>
                <TodoListItem
                    { ...item }
                />
            </li>
        )
    });

    return (
        <ul>
            { dataArr }
        </ul>
    )
};

export default TodoList;