import {compose} from 'fp-ts/lib/function'
import match from '@housinganywhere/match'
import * as dateFns from 'date-fns'

import {Currency} from './model'

type N = 'negative' | 'zero' | 'positive'

export const numToN = (n: number): N =>
  n > 0 ? 'positive' : n < 0 ? 'negative' : 'zero'

export const nColor = match<N, string>({
  negative: () => 'red',
  zero: () => 'yellow',
  positive: () => 'green',
})

export const numColor = compose(nColor, numToN)

export const currencySymbol = match<Currency, string>({
  EUR: () => '€',
  Other: () => '$',
})

export const isWithinRange = (from: Date, to: Date) => (date: Date) =>
  dateFns.isWithinRange(date, from, to)
