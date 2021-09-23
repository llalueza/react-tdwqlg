import * as React from 'react';
import Task from './Task';

import axios from 'axios';
import useAxios from 'axios-hooks';

export default function TaskBoard() {
  const [{ data, loading, error }, refetch] = useAxios({
    url: 'https://jsonplaceholder.typicode.com/todos',
    method: 'GET',
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <button onClick={refetch}>refetch</button>
      {data.map((task) => {
        return (
          <Task key={task.id} title={task.title} completed={task.completed} />
        );
      })}
      {
        //<pre>{JSON.stringify(data, null, 2)}</pre>
      }
    </div>
  );
}
