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

    const placeHolderText = 'search';
    const searchStyle ={
        fontSize: '25px',
        color: 'blue'
    }


    return (
        <input type="text"
               placeholder={placeHolderText}
               className={['text-input']}
               htmlFor="id"
               style={searchStyle}
        />
    )
};

const App = () => {
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList items={['item 1', 'item 2']} />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
