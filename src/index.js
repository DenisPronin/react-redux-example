import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import App from './containers/App';
import Foo from './containers/Foo';
import Bar from './containers/Bar';

import configureStore from './store/configureStore';
import './styles/main.scss';

const Store = configureStore();

render(
    <Provider store={Store.store}>
        <Router history={Store.history}>
            <Route path="/" component={App}>
                <Route path="foo" component={Foo}/>
                <Route path="bar" component={Bar}/>
            </Route>
        </Router>
    </Provider>, document.getElementById('app')
);

