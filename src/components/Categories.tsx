import * as React from 'react'
import {render} from 'react-dom'
import {Grid, Typography} from '@material-ui/core'

import {
  Transaction as ITransaction,
  categories,
  Category,
  ByCategory,
  groupByCategory,
  categoryLabel,
} from '../model'
import Transaction from './Transaction'
import Header from './Header'
import Expandable from './Expandable'
import Amount from './Amount'

interface Props {
  category: Category
  ts: ITransaction[]
}

const Cat: React.SFC<Props> = ({category, ts}) => {
  // TODO: total by currency
  const total = ts.reduce((acc, t) => acc + t.balance.debit, 0)

  return (
    <Expandable
      summary={
        <Grid container justify="space-between">
          <Grid item xs={3}>
            <Typography variant="h6">{categoryLabel(category)}</Typography>
          </Grid>
          <Grid item>
            <Typography align="right" variant="h6">
              <Amount amount={Math.round(total)} />
            </Typography>
          </Grid>
        </Grid>
      }
      details={
        <>
          {ts.map((t, i) => (
            <Transaction key={i} {...t} />
          ))}
        </>
      }
    />
  )
}

interface CategoriesProps {
  ts: ByCategory
}

const Categories: React.SFC<CategoriesProps> = ({ts}) => (
  <>
    {categories
      .filter(cat => ts[cat].length)
      .map(category => (
        <Cat key={category} category={category} ts={ts[category]} />
      ))}
  </>
)

export default Categories
