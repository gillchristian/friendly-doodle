import * as React from 'react'
import {Grid, Input, Button} from '@material-ui/core'
import {format} from 'date-fns'

import {DateFormatInput} from 'material-ui-next-pickers'

interface Props {
  min: Date
  max: Date
  from: Date
  to: Date
  setFrom: (arg: Date) => void
  setTo: (arg: Date) => void
}

const Filters: React.SFC<Props> = ({min, max, from, to, setFrom, setTo}) => {
  return (
    <Grid container justify="space-around">
      <Grid item sm={4}>
        <DateFormatInput
          name="from-filter"
          value={from}
          onChange={setFrom}
          dateFormat="dd MMM, yyyy"
          min={min}
          max={to}
        />
      </Grid>

      <Grid item sm={4}>
        <DateFormatInput
          name="to-filter"
          value={to}
          onChange={setTo}
          dateFormat="dd MMM, yyyy"
          max={max}
          min={from}
        />
      </Grid>
    </Grid>
  )
}

export default Filters
