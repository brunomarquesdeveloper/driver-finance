function Aplicativo() {

  return (
    <>
      <h3 className="section-title mb-3">
        <i className="bi bi-phone me-2"></i>
        Aplicativo
      </h3>

      <div className="list-group">

        <div className="list-group-item d-flex justify-content-between align-items-center">
          <span>
            <i className="bi bi-info-circle me-3"></i>
            Versão do aplicativo
          </span>

          <span className="text-secondary">
            v1.0.0
          </span>
        </div>

        <button
          type="button"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <span>
            <i className="bi bi-question-circle me-3"></i>
            Suporte
          </span>

          <i className="bi bi-chevron-right"></i>
        </button>

      </div>
    </>
  )
}

export default Aplicativo