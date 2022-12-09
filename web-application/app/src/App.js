import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import InsertPage from './components/InsertPage';
import {Home} from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="insert" element={<InsertPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
