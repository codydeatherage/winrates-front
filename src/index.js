import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import InfoPage from './components/InfoPage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route
        exact = {true}
        path="/"
        component={App}
      />
      <Route
      exact={true}
      path="/:name"
      component={InfoPage}
      />
      
    {/*   <App /> */}
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
