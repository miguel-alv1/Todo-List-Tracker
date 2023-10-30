import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';
function App() {
  const [todos, setTodos] = useState([{rowNumber: 1, rowDescription: 'Build React Project', rowPriority: 1}]);

  const addTodo = (description, priority) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    }
    else {
      rowNumber = 1;
    }
    const newTodo = {rowNumber: rowNumber, rowDescription: description, rowPriority: priority};
    setTodos(todos => [...todos, newTodo]);
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Todo List Tracker
        </div>
        <div className='card-body'>
        </div>
        <TodoTable todos={todos}/>
      </div>
        <button className='btn btn-primary'>Add New Todo</button>
        <NewTodoForm/>
    </div>
  );
}

export default App;
