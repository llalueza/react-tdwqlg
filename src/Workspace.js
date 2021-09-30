import React, { useState } from 'react';
import useAxios from 'axios-hooks';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import RefreshIcon from '@mui/icons-material/Refresh';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import { useHistory, useParams } from 'react-router-dom';

import Task from './Task';

export default function Workspace() {
  const params = useParams();
  const [page, setPage] = useState(1);
  const [
    { workspaceData, loadingWorkspace, errorWorkspace },
    refetchWorkspace,
  ] = useAxios({
    url: 'tasks/workspace/',
    method: 'GET',
    params: {
      id: params.id,
      format: 'json',
    },
  });
  const [{ data, loading, error }, refetch] = useAxios({
    url: 'tasks/list/',
    method: 'GET',
    params: {
      workspace: params.id,
      format: 'json',
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      {(loading || loadingWorkspace) && <p>Loading...</p>}
      {(error || errorWorkspace) && <p>Error!!!</p>}
      {/*<pre>{JSON.stringify(params, null, 2)}</pre>>*/}
      {/*data && <pre>{JSON.stringify(data, null, 2)}</pre>*/}
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={refetch}>
          <RefreshIcon />
        </Button>
        {data.previous && (
          <Button onClick={() => setPage((p) => Math.max(1, p - 1))}>
            <NavigateBeforeIcon />
          </Button>
        )}
        {data.next && (
          <Button onClick={() => setPage((p) => p + 1)}>
            <NavigateNextIcon />
          </Button>
        )}
      </ButtonGroup>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {data.results.map((task) => {
          return <Task key={task.id} {...task} />;
        })}
      </List>
      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
    </div>
  );
}
