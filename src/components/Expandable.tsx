import * as React from 'react';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  WithStyles,
  createStyles,
  withStyles,
  Theme,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = (theme: Theme) =>
  createStyles({
    content: {
      margin: `1.25rem 0`,
    },
    root: {
      display: 'block',
    },
  });

interface OwnProps {
  summary: React.ReactNode;
  details: React.ReactNode;
}

type Props = OwnProps & WithStyles<typeof styles>;

export const Expandable: React.SFC<Props> = ({
  summary,
  details,
  classes: cx,
}) => (
  <ExpansionPanel>
    <ExpansionPanelSummary
      classes={{content: cx.content}}
      expandIcon={<ExpandMoreIcon />}>
      {summary}
    </ExpansionPanelSummary>
    <ExpansionPanelDetails classes={{root: cx.root}}>
      {details}
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

export default withStyles(styles)(Expandable);
