import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import ReactNews from './ReactNews';
import JavaScriptNews from './JavaScriptNews';
import App from './App';
import NewsLayout from './NewsLayout';
import NewsResults from './NewsResults';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   // <React.StrictMode>
      <Router>
         <Routes>
            <Route element={<App />}>
               <Route path="/news" element={<NewsLayout />}>
                  <Route path=":newsTopic" element={<NewsResults />} />
               </Route>
               <Route path="/" element={<Home />} />
            </Route>
            
         </Routes>
      </Router>
   // </React.StrictMode>
);