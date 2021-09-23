import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

export default function Task(props) {
  return (
    <ListItem
      key={props.id}
      secondaryAction={
        <IconButton edge="end" aria-label="comments">
          <CommentIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={props.completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': props.id }}
          />
        </ListItemIcon>
        <ListItemText id={props.id} primary={props.title} />
      </ListItemButton>
    </ListItem>
  );
}
