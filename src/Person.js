import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import TagGroup from './TagGroup';

export default function Person(props) {
  return (
    <Paper sx={{ p: 2, margin: '2em', flexGrow: 1 }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1,
          gridTemplateRows: 'auto',
          gridTemplateAreas: `"a h h s"
                              "m m . s"
                              "f f f f"`,
        }}
      >
        <Box sx={{ gridArea: 'h' /*, bgcolor: 'primary.main'*/ }}>
          <Typography variant="h5" gutterBottom component="div">
            {props.alias ? props.alias : props.surname + ', ' + props.name}
          </Typography>
          {props.alias && (
            <Typography variant="h6" gutterBottom component="div">
              {props.surname + ', ' + props.name}
            </Typography>
          )}
          <Typography
            color="text.disabled"
            variant="caption"
            gutterBottom
            component="div"
          >
            $$Last edit at$$ {props.updated_at}
          </Typography>
          {/*<pre>{JSON.stringify(props, null, 2)}</pre>*/}
        </Box>
        <Box sx={{ gridArea: 'a' }}>
          <Avatar
            alt={props.name}
            src="/static/images/avatar/1.jpg"
            sx={{ width: 64, height: 64 }}
          />
        </Box>
        <Box sx={{ gridArea: 'm' }}>.</Box>
        <Box sx={{ gridArea: 's' }}>
          {props.dob}
          <br />
          $$En 23 dias$$
        </Box>
        <Box sx={{ gridArea: 'f' }}>
          <TagGroup tags={props.tags} />
        </Box>
      </Box>
    </Paper>
  );
}
