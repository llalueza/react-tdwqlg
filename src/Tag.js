import * as React from 'react';
import Chip from '@mui/material/Chip';

export default function Tag(props) {
  return (
    <div>
      <Chip label={'#' + props.label} />
    </div>
  );
}
