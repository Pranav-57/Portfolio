import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import HashLoader from "react-spinners/HashLoader";

const App = React.lazy(() => import('./App'));
const loading = true;
const color = "purple";

ReactDOM.render(
  <Suspense fallback={ <div className="preloader">
    <HashLoader color={color} loading={loading} size={50} />
  </div> }
  >
    <App />
  </Suspense>,
  document.getElementById('root')
);

// reportWebVitals();
