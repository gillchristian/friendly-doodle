import * as React from 'react'
import {Grid, Typography} from '@material-ui/core'

import Amount from './Amount'

interface Props {
  balance: number
}

const Balance: React.SFC<Props> = ({balance}) => (
  <Grid container justify="space-between">
    <Grid item xs={3}>
      <Typography variant="h6">Balance</Typography>
    </Grid>
    <Grid item>
      <Typography align="right" variant="h6">
        <Amount amount={Math.round(balance)} />
      </Typography>
    </Grid>
  </Grid>
)

export default Balance
