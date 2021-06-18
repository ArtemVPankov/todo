import React from 'react';
import TodoListItem from './todo-list-item';


const TodoList = ( { data } ) => {

    const dataArr = data.map(( item ) => {
        return (
            <li key={ item.id }>
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