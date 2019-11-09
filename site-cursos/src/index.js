import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render((
    <BrowserRouter>
        <Provider store={createStoreWithMiddleware(reducers)}>
            <App />
        </Provider>
    </BrowserRouter>
), document.getElementById('app'));

serviceWorker.unregister();
