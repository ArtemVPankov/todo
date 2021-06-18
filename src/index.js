import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';
import AppHeader from './components/app-heaedr';



const App = () => {

    const data = [
        {value: 'link 1', important: false},
        {value: 'link 2', important: false},
        {value: 'link 3', important: true},
    ];

    const loginBox = <span>Login please</span>

    return (
        <div>
            { loginBox }
            <AppHeader/>
            <SearchPanel/>
            <TodoList data={ data } />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
