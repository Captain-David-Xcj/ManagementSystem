import React from 'react';
import ReactDOM from 'react-dom';
import LayOut from './LayOut';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";

const store=createStore(rootReducer);
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={LayOut}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);