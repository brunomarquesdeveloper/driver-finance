import { useEffect, useState } from 'react'

function StorageModal() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const avisoVisto = localStorage.getItem('storage_notice_seen')

    if (!avisoVisto) {
      setShow(true)
    }
  }, [])

  const fecharAviso = () => {
    localStorage.setItem('storage_notice_seen', 'true')
    setShow(false)
  }

  if (!show) return null

  return (
    <>
      <div className="modal-backdrop fade show"></div>

      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-dialog modal-dialog-centered px-3">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">
                <i className="bi bi-database me-2"></i>
                Seus dados
              </h5>
            </div>

            <div className="modal-body">

              <div className="text-center mb-4">
                <i className="bi bi-phone display-5 text-primary"></i>

                <h6 className="fw-bold mt-3">
                  Seus dados ficam neste dispositivo
                </h6>
              </div>

              <p className="small text-secondary">
                Para funcionar mesmo sem internet, o Driver Finance
                armazena seus registros diretamente neste dispositivo.
              </p>

              <div className="alert alert-warning small mb-3">
                <i className="bi bi-exclamation-triangle me-2"></i>
                Se você limpar os dados do navegador ou desinstalar o
                aplicativo, seus registros poderão ser apagados.
              </div>

              <p className="small text-secondary mb-0">
                Recomendamos fazer backups regularmente quando essa
                função estiver disponível.
              </p>

            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={fecharAviso}
              >
                Entendi
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default StorageModal