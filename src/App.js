import React, { Suspense } from 'react';
import './style.css';

import MiniDrawer from './MiniDrawer';
import GlobalStateStore from './GlobalStateStore';

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <div>App loading...</div>
  </div>
);

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <GlobalStateStore>
        <MiniDrawer />
      </GlobalStateStore>
    </Suspense>
  );
}
