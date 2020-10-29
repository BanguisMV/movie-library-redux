import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import CircularProgress from '@material-ui/core/CircularProgress';

// import App from './App';

import './App.css';
import { Helmet } from 'react-helmet';
const App = React.lazy(() => import('./App')); // Lazy-loaded

ReactDOM.render(
  <Provider store={store}>
    
    <BrowserRouter>
      <Helmet>
              <title>Movie Library 2.0</title>
                  <meta
                    name="description"
                    content="A Movie Library based on my previous version of it. Built with redux and redux thunk."
                  />
              <link rel="canonical" href="https://movie-redux.banguismv.wtf/" />
        </Helmet>
        <Suspense fallback={<div className='GlobalSpinner'><CircularProgress/></div>}>
            <App />
        </Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
