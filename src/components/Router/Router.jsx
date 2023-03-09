import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Write from '../../pages/Write/Write';
import Contact from '../../pages/Contact/Contact';
import Article from '../../pages/Article/Article';
import Error from '../../pages/Error/Error';

export default function Router() {
  return (
    <main>
        <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/write'} element={<Write />} />
            <Route path={'/contact'} element={<Contact />} />
            <Route path={'/article/:id'} element={<Article />} />
            <Route path={'*'} element={<Error />} />
        </Routes>
    </main>
  )
}
