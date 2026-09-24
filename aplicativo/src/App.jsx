import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import BottomNav from './components/BottomNav'
import Dashboard from './pages/Dashboard'
import Registros from './pages/Registros'
import Despesas from './pages/Despesas'
import Configuracoes from './pages/Configuracoes'

function App() {

  useEffect(() => {

    const tema = localStorage.getItem('tema') || 'automatico'

    const html = document.documentElement

    if (tema === 'claro') {

      html.setAttribute('data-bs-theme', 'light')

    }

    if (tema === 'escuro') {

      html.setAttribute('data-bs-theme', 'dark')

    }

    if (tema === 'automatico') {

      const prefereEscuro = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches

      html.setAttribute(
        'data-bs-theme',
        prefereEscuro ? 'dark' : 'light'
      )

    }

  }, [])

  return (

    <BrowserRouter>

      <div className="app">

        <Header />

        <main className="main-content">

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/registros"
              element={<Registros />}
            />

            <Route
              path="/despesas"
              element={<Despesas />}
            />

            <Route
              path="/configuracoes"
              element={<Configuracoes />}
            />

          </Routes>

        </main>

        <BottomNav />

      </div>

    </BrowserRouter>

  )
}

export default App