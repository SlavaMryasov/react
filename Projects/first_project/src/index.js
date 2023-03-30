import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';




const root = ReactDOM.createRoot(document.getElementById('root'));
const rerender = (state) => { // то,что пришло из getState засунули в state(state - это моя переменная, которой я присвоил то, что дал getState)
    root.render(
        <App state={state} dispatch={store.dispatch.bind(store)} />
    );
    reportWebVitals();

}

rerender(store.getState());

store.subscribe(rerender); 