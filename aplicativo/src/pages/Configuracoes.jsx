function Configuracoes() {
  return (
    <div className="container py-4">

      <h2 className="h4 fw-bold mb-1">
        Configurações
      </h2>

      <p className="text-secondary small mb-4">
        Configure o Driver Finance.
      </p>

      <div className="list-group">

        <button
          type="button"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <span>
            <i className="bi bi-car-front me-3"></i>
            Veículo
          </span>

          <i className="bi bi-chevron-right"></i>
        </button>

        <button
          type="button"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <span>
            <i className="bi bi-fuel-pump me-3"></i>
            Combustível
          </span>

          <i className="bi bi-chevron-right"></i>
        </button>

        <button
          type="button"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <span>
            <i className="bi bi-currency-dollar me-3"></i>
            Metas financeiras
          </span>

          <i className="bi bi-chevron-right"></i>
        </button>

      </div>

    </div>
  )
}

export default Configuracoes