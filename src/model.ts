import match from '@housinganywhere/match'
import {object} from 'prop-types'

export type Category =
  | 'Groceries'
  | 'EatOut'
  | 'Transport'
  | 'Internal'
  | 'Rent'
  | 'Services'
  | 'Salary'
  | 'Reimbursement'
  | 'Incoming'
  | 'Cash'
  | 'Study'
  | 'Health'
  | 'SelfCare'
  | 'Tax'
  | 'House'
  | 'Gym'
  | 'Entertainment'
  | 'Clothes'
  | 'Bikes'
  | 'CreditCard'
  | 'PayPal'
  | 'Others'
  | 'Unknown'

export type Currency = 'EUR' | 'Other'

interface Balance {
  before: number
  after: number
  debit: number
}

export interface TransactionBase {
  acc: string
  description: string | null
  originalDesc: string
  currency: Currency
  balance: Balance
  category: Category
}

export interface TransactionRaw extends TransactionBase {
  transactionDate: string
  valueDate: string
}

export interface Transaction extends TransactionBase {
  transactionDate: Date
  valueDate: Date
}

export type ByCategory = {[C in Category]: Transaction[]}

export const groupByCategory = (ts: Transaction[]): ByCategory =>
  ts.reduce((acc, t) => {
    if (acc[t.category]) {
      acc[t.category].push(t)
    } else {
      acc[t.category] = [t]
    }
    return acc
  }, byCategory())

export const normalize = (ts: TransactionRaw): Transaction => ({
  ...ts,
  transactionDate: new Date(ts.transactionDate),
  valueDate: new Date(ts.valueDate),
})

export const byCategory = (): ByCategory => ({
  Groceries: [],
  EatOut: [],
  Transport: [],
  Internal: [],
  Rent: [],
  Services: [],
  Salary: [],
  Reimbursement: [],
  Incoming: [],
  Cash: [],
  Study: [],
  Health: [],
  SelfCare: [],
  Tax: [],
  House: [],
  Gym: [],
  Entertainment: [],
  Clothes: [],
  Bikes: [],
  CreditCard: [],
  PayPal: [],
  Others: [],
  Unknown: [],
})

export const categories: ReadonlyArray<Category> = [
  'Salary',
  'Incoming',
  'Reimbursement',
  'Rent',
  'Groceries',
  'EatOut',
  'Transport',
  'Services',
  'CreditCard',
  'Cash',
  'Study',
  'Health',
  'SelfCare',
  'Tax',
  'House',
  'Gym',
  'Entertainment',
  'Clothes',
  'Bikes',
  'PayPal',
  'Others',
  'Internal',
  'Unknown',
]

export const categoryLabel = match<Category, string>({
  Groceries: () => 'Groceries',
  EatOut: () => 'Eat Out',
  Transport: () => 'Transport',
  Internal: () => 'Internal',
  Rent: () => 'Rent',
  Services: () => 'Services',
  Salary: () => 'Salary',
  Reimbursement: () => 'Reimbursement',
  Incoming: () => 'Incoming',
  Cash: () => 'Cash',
  Study: () => 'Study',
  Health: () => 'Health',
  SelfCare: () => 'Self Care',
  Tax: () => 'Tax',
  House: () => 'House',
  Gym: () => 'Gym',
  Entertainment: () => 'Entertainment',
  Clothes: () => 'Clothes',
  Bikes: () => 'Bikes',
  CreditCard: () => 'Credit Card',
  PayPal: () => 'PayPal',
  Others: () => 'Others',
  Unknown: () => 'Unknown',
})
