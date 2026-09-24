import { useState } from 'react'

function Mes({ aberto, fechar }) {

  const [dia, setDia] = useState(
    Number(localStorage.getItem('primeiroDiaMes')) || 1
  )

  function alterarDia(novoDia) {

    setDia(novoDia)

    localStorage.setItem('primeiroDiaMes', novoDia)

  }

  if (!aberto) {
    return null
  }

  return (

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
              Primeiro dia do mês
            </h5>

            <button
              type="button"
              className="btn-close"
              onClick={fechar}
              aria-label="Fechar"
            ></button>

          </div>

          <div className="modal-body">

            <p className="text-secondary small mb-3">
              Escolha o primeiro dia do seu período financeiro.
            </p>

            <div className="row row-cols-7 g-2">

              {Array.from({ length: 31 }, (_, index) => {

                const numero = index + 1

                return (
                  <div
                    key={numero}
                    className="col"
                  >

                    <button
                      type="button"
                      className={`btn w-100 ${
                        dia === numero
                          ? 'btn-primary'
                          : 'btn-outline-secondary'
                      }`}
                      onClick={() => alterarDia(numero)}
                    >
                      {numero}
                    </button>

                  </div>
                )

              })}

            </div>

            <div className="alert alert-primary mt-4 mb-0">

              <div className="d-flex align-items-center">

                <i className="bi bi-calendar-check me-2"></i>

                <div>

                  <strong>
                    Dia {dia}
                  </strong>

                  <div className="small">
                    O período financeiro começa no dia {dia}.
                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="modal-footer">

            <button
              type="button"
              className="btn btn-secondary"
              onClick={fechar}
            >
              Fechar
            </button>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Mes