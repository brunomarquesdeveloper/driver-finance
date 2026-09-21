import StatCard from '../components/StatCard'

function Dashboard() {
  return (
    <div className="container py-4">

      {/* Período */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="h4 fw-bold mb-1">
            Dashboard
          </h2>

          <span className="text-secondary small">
            Resumo de hoje
          </span>
        </div>

        <button
          className="btn btn-outline-secondary btn-sm"
          type="button"
        >
          <i className="bi bi-calendar3 me-2"></i>
          Hoje
        </button>
      </div>

      {/* Resumo principal */}
      <div className="card main-summary mb-4">
        <div className="card-body p-4">

          <div className="text-secondary small mb-1">
            Ganhos líquidos
          </div>

          <div className="display-6 fw-bold mb-3">
            R$ 0,00
          </div>

          <div className="row g-3">

            <div className="col-6">
              <div className="summary-item">
                <span>Ganhos</span>
                <strong>R$ 0,00</strong>
              </div>
            </div>

            <div className="col-6">
              <div className="summary-item">
                <span>Despesas</span>
                <strong>R$ 0,00</strong>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Indicadores */}
      <h3 className="section-title">
        Indicadores
      </h3>

      <div className="row g-3 mb-4">

        <StatCard
          title="R$/km"
          value="R$ 0,00"
          icon="bi-signpost-2"
        />

        <StatCard
          title="R$/hora"
          value="R$ 0,00"
          icon="bi-clock"
        />

        <StatCard
          title="Corridas"
          value="0"
          icon="bi-car-front"
        />

        <StatCard
          title="Quilômetros"
          value="0 km"
          icon="bi-speedometer2"
        />

      </div>

      {/* Ações rápidas */}
      <h3 className="section-title">
        Ações rápidas
      </h3>

      <div className="row g-3 mb-4">

        <div className="col-6">
          <button
            type="button"
            className="btn btn-primary quick-action w-100"
          >
            <i className="bi bi-plus-circle me-2"></i>
            Adicionar corrida
          </button>
        </div>

        <div className="col-6">
          <button
            type="button"
            className="btn btn-outline-primary quick-action w-100"
          >
            <i className="bi bi-receipt me-2"></i>
            Adicionar despesa
          </button>
        </div>

      </div>

      {/* Estado vazio */}
      <div className="card empty-card">
        <div className="card-body text-center py-5">

          <i className="bi bi-bar-chart-line display-5 text-secondary"></i>

          <h4 className="h6 fw-bold mt-3">
            Nenhum dado registrado
          </h4>

          <p className="text-secondary small mb-0">
            Adicione sua primeira corrida ou despesa
            para começar a acompanhar seus resultados.
          </p>

        </div>
      </div>

    </div>
  )
}

export default Dashboard