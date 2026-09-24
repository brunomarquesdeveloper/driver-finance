function Dados() {

  return (
    <>
      <h3 className="section-title mb-3">
        <i className="bi bi-database me-2"></i>
        Dados
      </h3>

      <div className="list-group mb-4">

        <button
          type="button"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <span>
            <i className="bi bi-download me-3"></i>
            Exportar dados
          </span>

          <i className="bi bi-chevron-right"></i>
        </button>

        <button
          type="button"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <span>
            <i className="bi bi-trash me-3"></i>
            Limpar registros
          </span>

          <i className="bi bi-chevron-right"></i>
        </button>

        <button
          type="button"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <span>
            <i className="bi bi-trash me-3"></i>
            Limpar despesas
          </span>

          <i className="bi bi-chevron-right"></i>
        </button>

        <button
          type="button"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center text-danger"
        >
          <span>
            <i className="bi bi-exclamation-triangle me-3"></i>
            Apagar todos os dados
          </span>

          <i className="bi bi-chevron-right"></i>
        </button>

      </div>
    </>
  )
}

export default Dados