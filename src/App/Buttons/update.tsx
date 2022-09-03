import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function UpdateButton() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Update</Button>
    </Stack>
  );
}

export default UpdateButton;
