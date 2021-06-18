import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';
import AppHeader from './components/app-heaedr';
import ItemStatusFilter from './components/item-status-filter';


const App = () => {

    const data = [
        {value: 'link 1', important: false, id: 1},
        {value: 'link 2', important: false, id: 2},
        {value: 'link 3', important: true, id: 3},
    ];


    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList data={ data } />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
