import React, { useMemo } from 'react';

function UseMemoComponent({ tasks }) {
  const taskList = useMemo(() => {
    console.log('Rendering task list');
    return tasks.map((task, index) => <li key={index}>{task}</li>);
  }, [tasks]);

  return (
    <div>
      <h2>Task List</h2>
      <ul>{taskList}</ul>
    </div>
  );
}

export default UseMemoComponent;
