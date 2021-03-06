import React from 'react';
import Helmet from 'react-helmet';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
 
import { Store } from 'redux';
import configureStore, { AppState } from './store/Store';
import { service } from './services/socket-service';
import { Provider } from 'react-redux';

interface AppProps {
    store: Store<AppState>
}

const Root: React.SFC<AppProps> = props => {
    const title:string = "Trivia Gladiators"
    service.init();
    return (
        <Provider store={props.store}>
        <Helmet>
            <title>{title}</title>
        </Helmet>
           <App />
        </Provider>
    )
}

export const store = configureStore();


ReactDOM.render(<Root store={store} />, document.getElementById('root') as HTMLElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
