import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './main.style';
import Layout from './components/Layout/Layout';
import PostsProvider from './utils/context/context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostsProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </PostsProvider>
  </React.StrictMode>,
)
