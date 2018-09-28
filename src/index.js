import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './store/reducer';



// let's create our Store here only. As this is the top level component 

const store = createStore(reducer);

ReactDOM.render(
<Provider store={store}> 
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
