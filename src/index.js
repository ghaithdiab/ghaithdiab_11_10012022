import React from 'react'
import ReactDOM from 'react-dom'
import Accueil from './pages/Accueil'
import Error from './pages/Error'
import Propos from './pages/Propos'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Logement from './pages/Logement'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="ghaithdiab_11_10012022/" element={<Accueil />} />
      <Route path="/propos" element={<Propos />} />
      <Route path="ghaithdiab_11_10012022/propos" element={<Propos />} />
      <Route path="/logement/:id/" element={<Logement />} />
      <Route path="ghaithdiab_11_10012022/logement/:id/" element={<Logement />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
