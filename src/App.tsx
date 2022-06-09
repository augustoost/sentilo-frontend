import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AppNavbar } from './components/navbar'
import { SensorList } from './pages/sensorList'
import { Map } from './pages/map'
import { PageNotFound } from './pages/404'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <AppNavbar />
        <Routes>
          <Route index element={<SensorList />} />
          <Route path="Mapa" element={<Map />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
