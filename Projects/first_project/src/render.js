import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { changeNewMessText, changeNewPostText, createNewMess, createNewPost} from './redux/state';



const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerender = () =>{
    root.render(
        <App state ={state} createNewPost = {createNewPost} changeNewPostText={changeNewPostText} createNewMess={createNewMess} changeNewMessText={changeNewMessText}/>
    );
    reportWebVitals();

}

