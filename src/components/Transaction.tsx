import * as React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme,
  Grid,
  Typography,
  Tooltip,
} from '@material-ui/core'
import {format} from 'date-fns'

import {Transaction as ITransaction} from '../model'

import Amount from './Amount'

const styles = (t: Theme) =>
  createStyles({
    root: {
      marginBottom: 15,
    },
    date: {
      lineHeight: 1.2,
    },
    tooltip: {background: t.palette.secondary.dark},
  })

type Props = ITransaction & WithStyles<typeof styles>

const Transaction: React.SFC<Props> = ({
  transactionDate,
  balance,
  currency,
  originalDesc,
  classes,
}) => (
  <Grid
    container
    alignItems="center"
    justify="space-between"
    className={classes.root}
  >
    <Grid xs={1}>
      <Typography variant="subtitle2" className={classes.date} align="center">
        {format(transactionDate, 'MMM')}
      </Typography>
      <Typography variant="subtitle1" className={classes.date} align="center">
        {format(transactionDate, 'DD')}
      </Typography>
    </Grid>
    <Grid item xs={9}>
      <Tooltip title={originalDesc} classes={classes}>
        <Typography variant="subtitle1">
          {originalDesc.slice(0, 50)}
          {originalDesc.length > 50 && '…'}
        </Typography>
      </Tooltip>
    </Grid>
    <Grid item xs={2}>
      <Typography variant="subtitle1" align="right">
        <Amount amount={balance.debit} currency={currency} />
      </Typography>
      <Typography variant="caption" align="right">
        <b>Balance</b>:{' '}
        <Amount amount={balance.after} currency={currency} colors={false} />
      </Typography>
    </Grid>
  </Grid>
)

export default withStyles(styles)(Transaction)
