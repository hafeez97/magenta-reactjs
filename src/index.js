import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from "./header";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Footer from "./footer";
import Collection from "./pages/collection";
import Stats from "./pages/stats";
import Create from "./pages/create";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <main className="app-container">
      <Header/>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}/>
              <Route path="/collection" element={<Collection />}/>
              <Route path="/stats" element={<Stats/>}/>
              <Route path="/create" element={<Create/>}/>
          </Routes>
      </BrowserRouter>
          <Footer/>
      </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
