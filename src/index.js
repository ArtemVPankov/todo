import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    return (
        <ul>
            <li>b 111</li>
            <li>b 22</li>
        </ul>
    )
};

const AppHeader = () => {
    return (
        <h1>My todo list</h1>
    )
};

const SearchPanel = () => {
    return (
        <input type="text" placeholder="search"/>
    )
};

const App = () => {
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
