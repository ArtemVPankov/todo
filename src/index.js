import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';
import AppHeader from './components/app-heaedr';



const App = () => {

    const loginBox = <span>Login please</span>

    return (
        <div>
            { loginBox }
            <AppHeader/>
            <SearchPanel/>
            <TodoList items={['item 1', 'item 2']} />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
