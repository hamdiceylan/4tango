import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {configureStore} from './app/store/configureStore';

const store = configureStore();

const rootEl = document.getElementById('root');

let render = () =>{
    ReactDOM.render(
        <Provider store={store}>    
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
        , 
    rootEl);
}

if(module.hot){
    module.hot.accept('./App',() => {
        setTimeout(render);
    })
}


render();


serviceWorker.unregister();