import Navbar from '../components/Navbar'
import BottomNav from '../components/BottomNav'

function MainLayout({ children }) {
  return (
    <div className="app">
      <Navbar />

      <main className="container py-4">
        {children}
      </main>

      <BottomNav />
    </div>
  )
}

export default MainLayout