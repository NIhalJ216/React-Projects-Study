import React from 'react';
import Homehook from './Homehook';
import { Grid, Typography } from '@material-ui/core'

function Apphooks() {
  return (
    <Grid container>
      <Grid item xs={3}>
        <Homehook />
      </Grid>
      <Grid item xs={9} style={{ marginTop: '20px' }}>
        <Typography variant='h5'>
          All hooks learned from: https://youtu.be/LlvBzyy-558
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Apphooks;
