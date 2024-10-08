import React from 'react';
import AddTodo from './Components/AddTodo';
import Todos from './Components/Todos';

const App = () => {
  return (
    <div>
      <h1>App Components</h1>
      <AddTodo />
      <Todos/>
   </div>
  );
};

export default App;