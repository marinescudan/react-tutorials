import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

export const Button = function () {
    const theme = useContext(ThemeContext);
    const buttonStyle = {
        background: theme === 'dark' ? 'black' : 'white',
        color: theme === 'dark' ? 'white' : 'black'
    };
    return (
        <button style={ buttonStyle }>
            Themed Button
        </button>
    );
}

