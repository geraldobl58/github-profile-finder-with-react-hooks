import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Github Profile
        </Typography>
      </Toolbar>
    </AppBar>
  )
}