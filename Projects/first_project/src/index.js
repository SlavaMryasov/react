import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';




const root = ReactDOM.createRoot(document.getElementById('root'));
const rerender = () => { // то,что пришло из getState засунули в state(state - это моя переменная, которой я присвоил то, что дал getState)
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    reportWebVitals();

}

rerender(store.getState());


store.subscribe(() => {
    let state = store.getState();
    rerender(state);
}); 