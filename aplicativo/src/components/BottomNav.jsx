function BottomNav() {
  return (
    <nav className="bottom-nav">
      <a href="/">
        <span>🏠</span>
        <small>Início</small>
      </a>

      <a href="/registros">
        <span>📋</span>
        <small>Registros</small>
      </a>

      <a href="/dados">
        <span>⚙️</span>
        <small>Dados</small>
      </a>
    </nav>
  )
}

export default BottomNav