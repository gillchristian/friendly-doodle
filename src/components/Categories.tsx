import * as React from 'react'
import {Grid, Typography} from '@material-ui/core'

import {
  Transaction as ITransaction,
  Category as ICategory,
  categories,
  ByCategory,
  categoryLabel,
} from '../model'
import Transaction from './Transaction'
import Expandable from './Expandable'
import Amount from './Amount'

interface Props {
  category: ICategory
  ts: ITransaction[]
}

const Category: React.SFC<Props> = ({category, ts}) => (
  <Expandable
    summary={
      <Grid container justify="space-between">
        <Grid item xs={3}>
          <Typography variant="h6">{categoryLabel(category)}</Typography>
        </Grid>
        <Grid item>
          <Typography align="right" variant="h6">
            <Amount
              amount={Math.round(
                ts.reduce((acc, t) => acc + t.balance.debit, 0),
              )}
            />
          </Typography>
        </Grid>
      </Grid>
    }
    details={ts.map((t, i) => (
      <Transaction key={i} {...t} />
    ))}
  />
)

interface CategoriesProps {
  ts: ByCategory
}

const Categories: React.SFC<CategoriesProps> = ({ts}) => (
  <>
    {categories
      .filter(cat => ts[cat].length)
      .map(category => (
        <Category key={category} category={category} ts={ts[category]} />
      ))}
  </>
)

export default Categories
