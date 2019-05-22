import * as React from 'react'
import {render} from 'react-dom'

import {transactions} from './data'
import {normalize} from './model'
import Root from './components/Root'

const App = () => <Root ts={transactions.map(normalize)} />

const rootElement = document.getElementById('root')
render(<App />, rootElement)
