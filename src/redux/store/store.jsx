import {createStore, applyMiddleware} from 'redux'
import rootReducer from './../reducer/rootreducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
// export const store=createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export const store=createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))