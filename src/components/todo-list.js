import React from 'react';
import TodoListItem from './todo-list-item';
import './todo-list.css';


const TodoList = ( { data } ) => {

    const dataArr = data.map(( item ) => {

        const { id, ...other } = item;

        return (
            <li key={ id } className="list-group-item">
                <TodoListItem
                    { ...other }
                />
            </li>
        )
    });

    return (
        <ul className="list-group todo-list">
            { dataArr }
        </ul>
    )
};

export default TodoList;