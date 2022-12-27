import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import './App.less'
const Mine = lazy(()=>import("./pages/mine"))
const Test = lazy(()=>import("./pages/test"))

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mine />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;
