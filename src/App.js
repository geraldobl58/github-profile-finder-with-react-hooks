import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';

import { GlobalStyles } from './styles/global';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Profile />
    </div>
  );
}

export default App;
