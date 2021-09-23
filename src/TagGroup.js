import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import Tag from './Tag';

export default function TagGroup(props) {
  return (
    <div>
      <Stack direction="row" spacing={1}>
        {props.tags.map((tag) => {
          return <Tag key={tag} label={tag} />;
        })}
      </Stack>
    </div>
  );
}
