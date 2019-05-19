import * as React from 'react';
import {Grid} from '@material-ui/core';

import {Currency} from '../model';
import {numColor, currencySymbol} from '../utils';

interface Props {
  amount: number;
  colors?: boolean;
  currency?: Currency;
}

const EUR: Currency = 'EUR';

const Amount: React.SFC<Props> = ({amount, currency = EUR, colors = true}) => (
  <span style={{color: colors ? numColor(amount) : 'inherit'}}>
    {amount} {currencySymbol(currency)}
  </span>
);

export default Amount;
