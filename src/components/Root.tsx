import * as React from 'react'
import {render} from 'react-dom'
import {Grid, withStyles, WithStyles, createStyles} from '@material-ui/core'
import * as dateFns from 'date-fns'

import {Transaction, groupByCategory} from '../model'
import Categories from './Categories'
import Filters from './Filters'
import Balance from './Balance'

const styles = createStyles({
  container: {
    maxWidth: 720,
  },
})

interface Filters {
  from: Date
  to: Date
}

type Props = WithStyles<typeof styles> & {ts: Transaction[]}

const isWithinRange = (from: Date, to: Date) => (date: Date) =>
  dateFns.isWithinRange(date, from, to)

const Root: React.FunctionComponent<Props> = ({ts, classes: cx}) => {
  const first = ts[0].transactionDate
  const last = ts[ts.length - 1].transactionDate

  const [from, setFrom] = React.useState<Date>(first)
  const [to, setTo] = React.useState<Date>(last)

  const shouldDisplay = isWithinRange(from, to)

  const filtered = ts.filter(({transactionDate}) =>
    shouldDisplay(new Date(transactionDate)),
  )

  const balance = filtered.reduce((acc, t) => acc + t.balance.debit, 0)

  return (
    <Grid container direction="column" alignItems="center">
      <Grid container direction="column" className={cx.container} spacing={24}>
        <Grid item>
          <Filters
            min={first}
            max={last}
            from={from}
            to={to}
            setFrom={setFrom}
            setTo={setTo}
          />
        </Grid>

        <Grid item>
          <Balance balance={balance} />
        </Grid>

        <Grid item>
          <Categories ts={groupByCategory(filtered)} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Root)
