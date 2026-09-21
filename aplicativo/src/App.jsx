import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import BottomNav from './components/BottomNav'
import StorageModal from './components/StorageModal'

import Dashboard from './pages/Dashboard'
import Registros from './pages/Registros'
import Configuracoes from './pages/Configuracoes'

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Header />

        <main className="main-content">
          <Routes>

            <Route path="/" element={<Dashboard />} />

            <Route
              path="/registros"
              element={<Registros />}
            />

            <Route
              path="/configuracoes"
              element={<Configuracoes />}
            />

          </Routes>
        </main>

        <BottomNav />
        <StorageModal />

      </div>
    </BrowserRouter>
  )
}

export default App
