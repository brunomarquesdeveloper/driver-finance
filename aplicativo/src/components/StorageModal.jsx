function StorageModal({ show, onClose }) {
  if (!show) return null

  return (
    <>
      <div
        className="modal-backdrop fade show"
        onClick={onClose}
      ></div>

      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">
                <i className="bi bi-database me-2"></i>
                Armazenamento
              </h5>

              <button
                type="button"
                className="btn-close"
                aria-label="Fechar"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body">

              <div className="text-center mb-4">
                <i className="bi bi-phone display-5 text-primary"></i>

                <h6 className="fw-bold mt-3">
                  Dados armazenados neste dispositivo
                </h6>

                <p className="text-secondary small mb-0">
                  Seus registros financeiros são armazenados
                  localmente no navegador através do IndexedDB.
                </p>
              </div>

              <div className="card bg-light border-0">
                <div className="card-body">

                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-secondary">
                      Armazenamento utilizado
                    </span>

                    <strong>
                      Calculando...
                    </strong>
                  </div>

                  <div className="progress" role="progressbar">
                    <div
                      className="progress-bar"
                      style={{ width: '0%' }}
                    ></div>
                  </div>

                </div>
              </div>

              <div className="alert alert-light border mt-3 mb-0 small">
                <i className="bi bi-info-circle me-2"></i>
                Os dados não são enviados automaticamente para um
                servidor. Limpar os dados do navegador pode apagar
                seus registros.
              </div>

            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary w-100"
                onClick={onClose}
              >
                Fechar
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default StorageModal
