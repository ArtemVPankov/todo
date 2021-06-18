import React from 'react';

const TodoListItem = ( { value, important = false } ) => {

    const spanStyle = {
        color: important ? 'tomato' : 'black'
    }

    return <span style={ spanStyle }>{ value }</span>
};

export default TodoListItem;