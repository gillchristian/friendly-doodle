import match from '@housinganywhere/match'

import { Currency } from './model'

type N = 'negative' | 'zero' | 'positive'

export const numToN = (n: number): N =>
  n > 0 ? 'positive' : n < 0 ? 'negative' : 'zero'

export const nColor = match<N, string>({
  negative: () => 'red',
  zero: () => 'yellow',
  positive: () => 'green',
})

export const numColor = (n: number) => nColor(numToN(n))

export const currencySymbol = match<Currency, string>({
  EUR: () => '€',
  Other: () => '$',
})
