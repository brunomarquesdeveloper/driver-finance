import { useState } from 'react'

function Registros() {
  const [periodo, setPeriodo] = useState('todos')

  // Dados temporários para testar o layout.
  // Posteriormente serão substituídos pelos dados do IndexedDB.
  const registros = [
    {
      id: 1,
      data: '20/09/2026',
      dia: 'Domingo',
      ganhosBrutos: 320.50,
      tempoTrabalhado: '8h 20min',
      kmPercorridos: 186,
      quantidadeCorridas: 24,
      plataformas: ['Uber', '99']
    },
    {
      id: 2,
      data: '19/09/2026',
      dia: 'Sábado',
      ganhosBrutos: 280.00,
      tempoTrabalhado: '7h',
      kmPercorridos: 160,
      quantidadeCorridas: 21,
      plataformas: ['Uber']
    },
    {
      id: 3,
      data: '18/09/2026',
      dia: 'Sexta-feira',
      ganhosBrutos: 245.80,
      tempoTrabalhado: '6h 40min',
      kmPercorridos: 142,
      quantidadeCorridas: 19,
      plataformas: ['Uber', '99']
    }
  ]

  const registrosFiltrados = registros.filter(() => {
    // O filtro será conectado às datas reais posteriormente.
    return periodo === 'todos' || periodo === 'mes'
  })

  const formatarMoeda = (valor) => {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  return (
    <div className="container py-4">

      {/* Cabeçalho */}
      <div className="d-flex justify-content-between align-items-start mb-4">

        <div>
          <h2 className="h4 fw-bold mb-1">
            Registros
          </h2>

          <p className="text-secondary small mb-0">
            Histórico dos seus dias de trabalho
          </p>
        </div>

        <button
          type="button"
          className="btn btn-primary btn-sm"
        >
          <i className="bi bi-plus-lg me-1"></i>
          Adicionar
        </button>

      </div>

      {/* Filtro de período */}
      <div className="btn-group w-100 mb-4" role="group">

        <button
          type="button"
          className={`btn ${
            periodo === 'todos'
              ? 'btn-primary'
              : 'btn-outline-primary'
          }`}
          onClick={() => setPeriodo('todos')}
        >
          Todos
        </button>

        <button
          type="button"
          className={`btn ${
            periodo === 'mes'
              ? 'btn-primary'
              : 'btn-outline-primary'
          }`}
          onClick={() => setPeriodo('mes')}
        >
          Este mês
        </button>

      </div>

      {/* Lista */}
      <div className="d-flex justify-content-between align-items-center mb-3">

        <h3 className="section-title mb-0">
          Dias trabalhados
        </h3>

        <span className="text-secondary small">
          {registrosFiltrados.length} registros
        </span>

      </div>

      <div className="d-flex flex-column gap-3">

        {registrosFiltrados.map((registro) => (

          <div
            className="card daily-record-card"
            key={registro.id}
          >

            <div className="card-body">

              {/* Data */}
              <div className="d-flex justify-content-between align-items-start mb-3">

                <div>
                  <div className="fw-bold">
                    {registro.data}
                  </div>

                  <div className="text-secondary small">
                    {registro.dia}
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-light btn-sm rounded-circle"
                  aria-label={`Opções do dia ${registro.data}`}
                >
                  <i className="bi bi-three-dots-vertical"></i>
                </button>

              </div>

              {/* Ganhos */}
              <div className="record-earnings mb-3">

                <span className="text-secondary small">
                  Ganhos brutos
                </span>

                <strong>
                  {formatarMoeda(registro.ganhosBrutos)}
                </strong>

              </div>

              {/* Indicadores */}
              <div className="row g-3">

                <div className="col-4">
                  <div className="daily-metric">

                    <i className="bi bi-clock"></i>

                    <span>
                      Tempo
                    </span>

                    <strong>
                      {registro.tempoTrabalhado}
                    </strong>

                  </div>
                </div>

                <div className="col-4">
                  <div className="daily-metric">

                    <i className="bi bi-signpost-2"></i>

                    <span>
                      KM
                    </span>

                    <strong>
                      {registro.kmPercorridos}
                    </strong>

                  </div>
                </div>

                <div className="col-4">
                  <div className="daily-metric">

                    <i className="bi bi-car-front"></i>

                    <span>
                      Corridas
                    </span>

                    <strong>
                      {registro.quantidadeCorridas}
                    </strong>

                  </div>
                </div>

              </div>

              {/* Plataformas */}
              <div className="mt-3 pt-3 border-top">

                <span className="text-secondary small me-2">
                  Plataformas:
                </span>

                {registro.plataformas.map((plataforma) => (
                  <span
                    className="badge text-bg-light me-1"
                    key={plataforma}
                  >
                    {plataforma}
                  </span>
                ))}

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Estado vazio */}
      {registrosFiltrados.length === 0 && (
        <div className="card empty-card">

          <div className="card-body text-center py-5">

            <i className="bi bi-calendar-x display-5 text-secondary"></i>

            <h4 className="h6 fw-bold mt-3">
              Nenhum registro
            </h4>

            <p className="text-secondary small mb-3">
              Adicione seu primeiro dia de trabalho.
            </p>

            <button
              type="button"
              className="btn btn-primary"
            >
              <i className="bi bi-plus-lg me-2"></i>
              Adicionar registro
            </button>

          </div>

        </div>
      )}

    </div>
  )
}

export default Registros