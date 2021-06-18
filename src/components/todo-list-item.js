import React from 'react';
import './todo-list-item.css';

const TodoListItem = ( { value, important = false } ) => {

    const spanStyle = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    }

    return (

        <span className="todo-list-item">
            <span
              className="todo-list-item-label"
              style={spanStyle}>
            {value}
            </span>

            <button type="button"
                  className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-exclamation" />
            </button>

            <button type="button"
                  className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash"></i>
            </button>
        </span>


    )
};

export default TodoListItem;