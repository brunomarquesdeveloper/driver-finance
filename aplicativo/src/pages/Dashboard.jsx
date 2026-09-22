import { useState } from 'react'
import StatCard from '../components/StatCard'

import RegistroForm from '../components/RegistroForm'
import DespesaForm from '../components/DespesaForm'

function Dashboard() {
  const [mostrarFormularioRegistro, setMostrarFormularioRegistro] = useState(false)
  const [mostrarFormularioDespesa, setMostrarFormularioDespesa] = useState(false)


  function abrirFormularioRegistro() {
    setMostrarFormularioRegistro(true)
  }

  function abrirFormularioDespesa() {
    setMostrarFormularioDespesa(true)
  }


  return (
    <div className="container py-4">

      {/* Cabeçalho */}
      <div className="mb-4">
        <h2 className="h4 fw-bold mb-1">
          Dashboard
        </h2>

        <p className="text-secondary small mb-3">
          Acompanhe seu desempenho financeiro
        </p>

        {/* Seletor de período */}
        <div className="btn-group w-100" role="group">
          <button
            type="button"
            className="btn btn-primary"
          >
            Hoje
          </button>

          <button
            type="button"
            className="btn btn-outline-primary"
          >
            Semana
          </button>

          <button
            type="button"
            className="btn btn-outline-primary"
          >
            Mês
          </button>
        </div>
      </div>

      {/* Resumo financeiro */}
      <div className="card main-summary mb-4">
        <div className="card-body p-4">

          <div className="d-flex justify-content-between align-items-start mb-1">
            <span className="summary-label">
              Resultado líquido
            </span>

            <i className="bi bi-wallet2 summary-icon"></i>
          </div>

          <div className="display-6 fw-bold mb-4">
            R$ 0,00
          </div>

          <div className="row g-3">

            <div className="col-6">
              <div className="summary-item">
                <span>
                  <i className="bi bi-arrow-up-circle me-1"></i>
                  Ganhos
                </span>

                <strong>
                  R$ 0,00
                </strong>
              </div>
            </div>

            <div className="col-6">
              <div className="summary-item">
                <span>
                  <i className="bi bi-arrow-down-circle me-1"></i>
                  Despesas
                </span>

                <strong>
                  R$ 0,00
                </strong>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Indicadores */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="section-title mb-0">
          Indicadores
        </h3>

        <span className="text-secondary small">
          Hoje
        </span>
      </div>

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
            onClick={abrirFormularioRegistro}
          >
            <i className="bi bi-plus-circle me-2"></i>
            Novos registros
          </button>
        </div>

        <div className="col-6">
          <button
            type="button"
            className="btn btn-outline-primary quick-action w-100"
            onClick={abrirFormularioDespesa}
          >
            <i className="bi bi-plus-circle me-2"></i>
            Nova despesa
          </button>
        </div>

      </div>

      <RegistroForm
        aberto={mostrarFormularioRegistro}
        fechar={() => setMostrarFormularioRegistro(false)}
      />

      <DespesaForm
        aberto={mostrarFormularioDespesa}
        fechar={() => setMostrarFormularioDespesa(false)}
      />

    </div>
  )
}

export default Dashboard