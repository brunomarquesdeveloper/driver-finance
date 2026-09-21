function Header() {
  return (
    <header className="app-header">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3">
          <div>
            <h1 className="h5 mb-0 fw-bold">
              Driver Finance
            </h1>

            <small className="text-secondary">
              Controle financeiro
            </small>
          </div>

          <button
            className="btn btn-light rounded-circle"
            type="button"
            aria-label="Notificações"
          >
            <i className="bi bi-bell"></i>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header