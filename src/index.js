import React from 'react';
import './index.css';
import App from './App'; 
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Landing from './components/routes/Landing.tsx';
import Register from './components/routes/register/Register.tsx';
import Login from './components/routes/login/Login.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route path='' element={<Landing/>}/>
                <Route path='register/' element={<Register/>}/>
                <Route path='login/' element={<Login/>}/>
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Route>
        </Routes>
    </Router>
   
);

reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
