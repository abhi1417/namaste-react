/**
 * <div id="parent">
 *  <div id="child">
 *      <h1>Hi i am H1 Tag</h1>
 *      <h2>HI I am H2 Tag<h2>git 
 *  </div>
 *  <div id="child">
 *      <h1>Hi i am H1 Tag</h1>
 *      <h2>HI I am H2 Tag<h2>
 *  </div>
 * </div>
**/



const heading = React.createElement('div', {id: 'parent'}, 
    [React.createElement('div', {id: 'child'},
        [React.createElement('h1', {id: 'heading'}, 'Hi I am H1 Tag'),
        React.createElement('h2', {id: 'headingh2'}, 'Hi I am H2 Tag')]
    ),
    React.createElement('div', {id: 'child'},
        [React.createElement('h1', {id: 'heading1'}, 'Hi I am H1 Tag'),
        React.createElement('h2', {id: 'headingh21'}, 'Hi I am H2 Tag')]
    )]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
