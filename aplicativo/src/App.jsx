import './App.css'
import MainLayout from './layouts/MainLayout'
import '../src/db/database'

function App() {
  return (
    <MainLayout>
      <section>
        <h1>Driver Finance</h1>
        <p>Controle financeiro para motoristas</p>
      </section>
    </MainLayout>
  )
}

export default App