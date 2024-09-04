import React, { useState, useCallback } from 'react';
import UseMemoComponent from './UseMemoComponent';
import ReactMemoComponent from './ReactMemo';

function App() {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState('');

  const addTask = useCallback(() => {
    setTasks([...tasks, 'New todo']);
  }, [tasks]);

  const incrementCounter = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const handleCustomTaskChange = (e) => {
    setCustomTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customTask.length > 5) {
      setTasks([...tasks, customTask]);
      setCustomTask('');
    } else {
      alert('Task must be more than 5 characters.');
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <button onClick={addTask}>Add todo</button>
      <button onClick={incrementCounter}>Increment</button>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={customTask} 
          onChange={handleCustomTaskChange} 
          placeholder="Enter a custom task" 
        />
        <button type="submit">Submit</button>
      </form>
      <UseMemoComponent tasks={tasks} />
      <ReactMemoComponent counter={counter} />
    </div>
  );
}

export default App;
