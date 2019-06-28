import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Menu from './components/Menu';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import configureStore, { AppState } from './store/Store';
import { BrowserRouter as Router, Route } from 'react-router-dom'

interface AppProps {
    store: Store<AppState>
}

const Root: React.SFC<AppProps> = props => {
    return (
        <Provider store={props.store}>
            <Router>
                <Route exact path="/" component={App} />
                <Route path = "/menu" component={Menu} />
            </Router>
        </Provider>
    )
}

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root') as HTMLElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
