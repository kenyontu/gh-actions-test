import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import App from './App'
import About from './About'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/gh-actions-test">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
