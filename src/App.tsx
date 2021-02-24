import React from 'react';
import './App.css';
import { Toaster } from 'react-hot-toast'

import { Provider } from 'react-redux'
import { store } from './store'
import Header from './Components/Header'

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
      </Provider>
      <Toaster />
    </>
  );
}

export default App;
