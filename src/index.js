import React from 'react';
import ReactDOM from 'react-dom';
import LayOut from './LayOut';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';

const store=createStore(rootReducer);
ReactDOM.render(
    <Provider store={store}>
        <LayOut />
    </Provider>,
    document.getElementById('root')
);