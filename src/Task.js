import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import TextField from '@mui/material/TextField';

import TagGroup from './TagGroup';

export default function Task(props) {
  const [editing, setEditing] = useState(false);

  if (editing) {
    return (
      <Paper sx={{ marginBottom: 2 }}>
        <ListItem
          alignItems="flex-start"
          secondaryAction={
            <div>
              <IconButton
                edge="end"
                aria-label="Save"
                sx={{ marginRight: '5px' }}
                onClick={() => setEditing(false)}
              >
                <CheckIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="CANCEL"
                onClick={() => setEditing(false)}
              >
                <ClearIcon />
              </IconButton>
            </div>
          }
        >
          <ListItemAvatar>
            <Checkbox checked={props.completed} tabIndex={-1} disableRipple />
          </ListItemAvatar>
          <Grid container spacing={2}>
            <Grid item xs={11}>
              <Box sx={{ display: 'block' }}>
                <TextField
                  fullWidth
                  label="TODO: CAMBIAR ESTA PUTA MIERDA"
                  id="TODO: CAMBIAR ESTA PUTA MIERDA"
                  defaultValue={props.title}
                />
              </Box>
            </Grid>
            <Grid item xs={11}>
              <Box sx={{ display: 'block' }}>
                <TextField
                  multiline
                  fullWidth
                  label="TODO: CAMBIAR ESTA PUTA MIERDA"
                  id="TODO: CAMBIAR ESTA PUTA MIERDA"
                  defaultValue={props.description}
                />
              </Box>
            </Grid>
          </Grid>
        </ListItem>
      </Paper>
    );
  } else {
    return (
      <Paper sx={{ marginBottom: 2 }}>
        <ListItem
          alignItems="flex-start"
          secondaryAction={
            <div>
              <IconButton
                edge="end"
                aria-label="edit"
                sx={{ marginRight: '5px' }}
                onClick={() => setEditing(true)}
              >
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </div>
          }
        >
          <ListItemAvatar>
            <Checkbox checked={props.completed} tabIndex={-1} disableRipple />
          </ListItemAvatar>
          <ListItemText
            primary={props.title}
            primaryTypographyProps={{
              sx: props.completed && { textDecoration: 'line-through' },
            }}
            secondary={<React.Fragment>{props.description}</React.Fragment>}
          />
        </ListItem>
      </Paper>
    );
  }
}
