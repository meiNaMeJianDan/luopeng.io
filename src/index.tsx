import React,{lazy,Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import {HashRouter} from 'react-router-dom';

const App = lazy(()=>import("./App"))
const root = document.getElementById('root');

if(root) {
  createRoot(root).render(<React.StrictMode>
    <div className="lxui kf5-app-box">
      <HashRouter>
        <Suspense fallback={<div className="progress" />}>
            <App />
        </Suspense>
      </HashRouter>
    </div>
    </React.StrictMode>)
}

