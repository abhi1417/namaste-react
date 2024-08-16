import React from "react";
import ReactDOM from "react-dom/client"; 

const heading = React.createElement('div', {id: 'parent'}, 
    [
        React.createElement('div', {id: 'child'},
            [
                React.createElement('h1', {id: 'heading'}, 'This is Namaste React'),
                React.createElement('h2', {id: 'headingh2'}, 'Hi I am H2 Tag')
            ]
        ),
        React.createElement('div', {id: 'child'},
            [
                React.createElement('h1', {id: 'heading1'}, 'Hi I am H1 Tag'),
                React.createElement('h2', {id: 'headingh21'}, 'Hi I am H2 Tag')
            ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(heading);
