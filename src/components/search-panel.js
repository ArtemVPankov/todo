import React from 'react';

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

export default SearchPanel;
