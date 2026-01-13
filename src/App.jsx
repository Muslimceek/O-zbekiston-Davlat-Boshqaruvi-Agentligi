import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Leadership from './pages/Leadership';
import Structure from './pages/Structure';
import Documents from './pages/Documents';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Appeals from './pages/Appeals';
import Contacts from './pages/Contacts';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/structure" element={<Structure />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/appeals" element={<Appeals />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Layout>
  );
}

export default App;
