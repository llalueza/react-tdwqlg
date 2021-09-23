import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { useTranslation, withTranslation, Trans } from 'react-i18next';

import useAxios from 'axios-hooks';

export default function TagSearch() {
  const [{ data, loading, error }, refetch] = useAxios({
    url: 'tags/tag/',
    method: 'GET',
    params: {
      format: 'json',
    },
  });

  const { t } = useTranslation();

  if (!data) return null;

  return (
    <Box
      sx={{
        display: 'block',
        width: 6000,
        height: 39,
        bgcolor: 'primary.light',
      }}
    >
      <Stack spacing={3}>
        <Autocomplete
          multiple
          id="tags-standard"
          loading
          onOpen={refetch}
          options={data.results}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <div>
              <TextField
                {...params}
                variant="standard"
                placeholder={t('menu.search')}
              />

              {/*
              <Typography variant="h6" noWrap component="div">
                Mini variant drawer
              </Typography>
              */}
            </div>
          )}
        />
      </Stack>
    </Box>
  );
}
