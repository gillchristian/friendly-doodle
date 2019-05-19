import * as React from 'react'
import { Grid, Typography } from '@material-ui/core'

const Header: React.SFC = () => (
  <Grid container>
    <Grid item sm={3} />
    <Grid item sm={2}>
      <Typography>Category</Typography>
    </Grid>
    <Grid item sm={2}>
      <Typography align="right">Debit amount</Typography>
    </Grid>
    <Grid item sm={2}>
      <Typography align="right">Balance</Typography>
    </Grid>
  </Grid>
)

export default Header
