import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import './App.sass'
import { AddressesPage } from './pages/Addresses'
import { AddressTransactionsPage } from './pages/AddressTransactionsPage'
import { TransactionsPage } from './pages/Transactions'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers/root.reducer'

const store = createStore(rootReducer, applyMiddleware(thunk))

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={AddressesPage} />
                    <Route path='/address/:address'>
                        <AddressTransactionsPage />
                    </Route>
                    <Route exact path={'/transactions'} component={TransactionsPage} />
                </Switch>
            </BrowserRouter>
        </Provider>

    )
}

ReactDOM.render(<App />, document.getElementById('app'))
