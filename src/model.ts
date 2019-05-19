import match from '@housinganywhere/match';
import {object} from 'prop-types';

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
  | 'CashBack'
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
  | 'Unknown';

export type Currency = 'EUR' | 'Other';

interface Balance {
  before: number;
  after: number;
  debit: number;
}

export interface TransactionRaw {
  acc: string;
  description: string;
  currency: Currency;
  transactionDate: string;
  valueDate: string;
  balance: Balance;
  category: Category;
}

export interface Transaction {
  acc: string;
  description: string;
  currency: Currency;
  transactionDate: Date;
  valueDate: Date;
  balance: Balance;
  category: Category;
}

export type ByCategory = {[C in Category]: Transaction[]};

export const groupByCategory = (ts: Transaction[]): ByCategory =>
  ts.reduce((acc, t) => {
    if (acc[t.category]) {
      acc[t.category].push(t);
    } else {
      acc[t.category] = [t];
    }
    return acc;
  }, byCategory());

export const normalize = (ts: TransactionRaw): Transaction => ({
  ...ts,
  transactionDate: new Date(ts.transactionDate),
  valueDate: new Date(ts.valueDate),
});

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
  CashBack: [],
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
});

export const categories: ReadonlyArray<Category> = [
  'Salary',
  'Incoming',
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
  'Reimbursement',
  'PayPal',
  'Others',
  'Internal',
  'CashBack',
  'Unknown',
];

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
  CashBack: () => 'Cash Back (?)',
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
});
