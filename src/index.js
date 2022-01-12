import React from 'react'
import ReactDOM from 'react-dom'
import Accueil from './pages/Accueil'
import Error from './pages/Error'
import Propos from './pages/Propos'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Accueil/>} />
      <Route path="/*" element={<Error />} />
      <Route path="/propos" element={<Propos/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
