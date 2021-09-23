import React, { useState } from 'react';
import useAxios from 'axios-hooks';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import RefreshIcon from '@mui/icons-material/Refresh';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import Person from './Person';

export default function TaskBoard() {
  const [page, setPage] = useState(1);
  const [{ data, loading, error }, refetch] = useAxios({
    url: 'contacts/person/',
    method: 'GET',
    params: {
      page,
      format: 'json',
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error!!!</p>}
      {/*data && <pre>{JSON.stringify(data, null, 2)}</pre>*/}
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={refetch}>
          <RefreshIcon />
        </Button>
        <Button onClick={() => setPage((p) => Math.max(1, p - 1))}>
          <NavigateBeforeIcon />
        </Button>
        <Button onClick={() => setPage((p) => p + 1)}>
          <NavigateNextIcon />
        </Button>
      </ButtonGroup>
      {data.results.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
      {
        //<pre>{JSON.stringify(data, null, 2)}</pre>
      }
    </div>
  );
}
