import * as React from 'react'
import {useState} from 'react'
import {compose} from 'fp-ts/lib/function'
import {Grid, withStyles, WithStyles, createStyles} from '@material-ui/core'

import {isWithinRange} from '../utils'
import {Transaction, groupByCategory, lens} from '../model'
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

const Root: React.FunctionComponent<Props> = ({ts, classes: cx}) => {
  const first = ts[0].transactionDate
  const last = ts[ts.length - 1].transactionDate

  const [from, setFrom] = useState<Date>(first)
  const [to, setTo] = useState<Date>(last)

  const shouldDisplay = compose(
    isWithinRange(from, to),
    lens.transactionDate.get,
  )

  const filtered = ts.filter(shouldDisplay)

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
