import React from 'react';
import { Provider } from 'react-redux';
import store from './configureStore'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        world
      </div>
    </Provider>
  );
}

export default App;
