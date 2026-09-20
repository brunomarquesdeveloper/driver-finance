import './App.css'
import { db } from './db/database'
import MainLayout from './layouts/MainLayout'

function App() {
  console.log('Banco:', db.name)

  return (
    <MainLayout>
      <section>
        <h2>Dashboard</h2>
        <p className="text-muted">
          Resumo financeiro do motorista
        </p>
      </section>
    </MainLayout>
  )
}

export default App