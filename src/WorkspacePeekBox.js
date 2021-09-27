import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';

import EditableField from './EditableField';

import { useHistory, useParams } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

export default function WorkspacePeekBox(props) {
  const params = useParams();
  const history = useHistory();
  const { t } = useTranslation();

  function goto(url) {
    history.push(url);
  }

  return (
    <Paper
      sx={{ p: 2, margin: '2em', flexGrow: 1 }}
      onClick={() => goto('/tasks/workspace/' + props.id)}
    >
      {/*<pre>{JSON.stringify(props, null, 2)}</pre>*/}
      {<pre>{JSON.stringify(params, null, 2)}</pre>}
      {props.name}
    </Paper>
  );
}
