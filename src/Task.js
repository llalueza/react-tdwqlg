import * as React from 'react';
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

import TagGroup from './TagGroup';

export default function Task(props) {
  return (
    <div>
      <Paper sx={{ p: 1, m: 2, flexGrow: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'auto',
            gridTemplateAreas: `"check title description actions"
                              "tags  tags  tags  tags"`,
          }}
        >
          <Box sx={{ gridArea: 'check' }}>
            <Checkbox
              edge="start"
              checked={props.completed}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': props.id }}
            />
          </Box>
          <Box sx={{ gridArea: 'title' /*, bgcolor: 'primary.main'*/ }}>
            <Typography variant="h5" gutterBottom component="div">
              {props.title}
            </Typography>
          </Box>
          <Box sx={{ gridArea: 'description' /*, bgcolor: 'primary.main'*/ }}>
            {props.description}
          </Box>
          <Box sx={{ gridArea: 'actions' }}>
            <IconButton edge="end" aria-label="comments">
              <CommentIcon />
            </IconButton>
            <IconButton edge="end" aria-label="comments">
              <CommentIcon />
            </IconButton>
            <IconButton edge="end" aria-label="comments">
              <CommentIcon />
            </IconButton>
          </Box>
          <Box sx={{ gridArea: 'tags' }}>
            <TagGroup tags={props.tags} />
          </Box>
        </Box>
      </Paper>
    </div>
  );
}
