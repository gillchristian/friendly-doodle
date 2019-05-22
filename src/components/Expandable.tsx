import * as React from 'react'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  WithStyles,
  createStyles,
  withStyles,
  Theme,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const styles = (theme: Theme) =>
  createStyles({
    content: {
      margin: `1.25rem 0`,
    },
    root: {
      display: 'block',
    },
  })

interface OwnProps {
  summary: React.ReactNode
  details: React.ReactNode
  expanded?: boolean
  onChange?: (isExpaned: boolean) => void
}

type Props = OwnProps & WithStyles<typeof styles>

export const Expandable: React.SFC<Props> = ({
  summary,
  details,
  classes: cx,
  expanded,
  onChange,
}) => (
  <ExpansionPanel
    expanded={expanded}
    onChange={onChange ? (_, isExpaned) => onChange(isExpaned) : undefined}
  >
    <ExpansionPanelSummary
      classes={{content: cx.content}}
      expandIcon={<ExpandMoreIcon />}
    >
      {summary}
    </ExpansionPanelSummary>
    <ExpansionPanelDetails classes={{root: cx.root}}>
      {details}
    </ExpansionPanelDetails>
  </ExpansionPanel>
)

export default withStyles(styles)(Expandable)
