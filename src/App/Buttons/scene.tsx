import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export function SceneButton() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Scene</Button>
    </Stack>
  );
}