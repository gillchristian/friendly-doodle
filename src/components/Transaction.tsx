import * as React from 'react';
import {
  Grid,
  Typography,
  withStyles,
  WithStyles,
  createStyles,
} from '@material-ui/core';
import {format} from 'date-fns';

import * as types from '../model';
import {numColor, currencySymbol} from '../utils';

import Amount from './Amount';

const styles = createStyles({
  root: {
    marginBottom: 15,
  },
  date: {
    lineHeight: 1.2,
  },
});

type Props = types.Transaction & WithStyles<typeof styles>;

const Transaction: React.SFC<Props> = ({
  transactionDate,
  category,
  balance,
  currency,
  description,
  classes,
}) => (
  <Grid container justify="space-between" className={classes.root}>
    <Grid item>
      <Typography variant="subtitle2" className={classes.date} align="center">
        {format(transactionDate, 'MMM')}
      </Typography>
      <Typography variant="subtitle1" className={classes.date} align="center">
        {format(transactionDate, 'DD')}
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="subtitle1" align="right">
        <Amount amount={balance.debit} currency={currency} />
      </Typography>
      <Typography variant="caption" align="right">
        <b>Balance</b>:{' '}
        <Amount amount={balance.after} currency={currency} colors={false} />
      </Typography>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Transaction);
