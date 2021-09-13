import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/reduxStore';
import Appredux from './Appredux';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Appredux />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);