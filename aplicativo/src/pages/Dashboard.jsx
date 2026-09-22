import { useEffect, useState } from 'react'

import StatCard from '../components/StatCard'
import RegistroForm from '../components/RegistroForm'
import DespesaForm from '../components/DespesaForm'

import { db } from '../db/database'

function Dashboard() {
  const [mostrarFormularioRegistro, setMostrarFormularioRegistro] = useState(false)
  const [mostrarFormularioDespesa, setMostrarFormularioDespesa] = useState(false)

  const [periodo, setPeriodo] = useState('hoje')

  const [dados, setDados] = useState({
    ganhos: 0,
    despesas: 0,
    liquido: 0,
    valorPorKm: 0,
    valorPorHora: 0,
    corridas: 0,
    quilometros: 0,
    horas: 0
  })

  function abrirFormularioRegistro() {
    setMostrarFormularioRegistro(true)
  }

  function abrirFormularioDespesa() {
    setMostrarFormularioDespesa(true)
  }

  function obterInicioPeriodo() {
    const hoje = new Date()

    hoje.setHours(0, 0, 0, 0)

    if (periodo === 'hoje') {
      return hoje
    }

    if (periodo === 'semana') {
      const diaSemana = hoje.getDay()

      const diferenca = diaSemana === 0
        ? 6
        : diaSemana - 1

      hoje.setDate(hoje.getDate() - diferenca)

      return hoje
    }

    if (periodo === 'mes') {
      hoje.setDate(1)

      return hoje
    }

    return hoje
  }

  async function carregarDados() {
    try {
      const registros = await db.registros.toArray()
      const despesas = await db.despesas.toArray()

      const inicioPeriodo = obterInicioPeriodo()

      const inicio = inicioPeriodo
        .toISOString()
        .split('T')[0]

      const hoje = new Date()

      const fim = hoje
        .toISOString()
        .split('T')[0]

      const registrosFiltrados = registros.filter(registro => {
        return registro.data >= inicio && registro.data <= fim
      })

      const despesasFiltradas = despesas.filter(despesa => {
        return despesa.data >= inicio && despesa.data <= fim
      })

      // =========================
      // GANHOS
      // =========================

      const ganhos = registrosFiltrados.reduce(
        (total, registro) => {
          return total + Number(registro.ganhosBrutos || 0)
        },
        0
      )

      // =========================
      // DESPESAS
      // =========================

      const despesasTotal = despesasFiltradas.reduce(
        (total, despesa) => {
          return total + Number(despesa.valor || 0)
        },
        0
      )

      // =========================
      // QUILÔMETROS
      // =========================

      const quilometros = registrosFiltrados.reduce(
        (total, registro) => {
          return total + Number(registro.kmPercorridos || 0)
        },
        0
      )

      // =========================
      // CORRIDAS
      // =========================

      const corridas = registrosFiltrados.reduce(
        (total, registro) => {
          return total + Number(registro.quantidadeCorridas || 0)
        },
        0
      )

      // =========================
      // TEMPO TRABALHADO
      // =========================

      const minutos = registrosFiltrados.reduce(
        (total, registro) => {
          return total + Number(registro.tempoTrabalhado || 0)
        },
        0
      )

      const horas = minutos / 60

      // =========================
      // RESULTADO LÍQUIDO
      // =========================

      const liquido = ganhos - despesasTotal

      // =========================
      // R$/KM
      // =========================

      const valorPorKm = quilometros > 0
        ? ganhos / quilometros
        : 0

      // =========================
      // R$/HORA
      // =========================

      const valorPorHora = horas > 0
        ? ganhos / horas
        : 0

      setDados({
        ganhos,
        despesas: despesasTotal,
        liquido,
        valorPorKm,
        valorPorHora,
        corridas,
        quilometros,
        horas
      })

    } catch (error) {
      console.error(
        '❌ Erro ao carregar dados do Dashboard:',
        error
      )
    }
  }

  // =========================
  // CARREGAR DASHBOARD
  // =========================

  useEffect(() => {
    carregarDados()
  }, [periodo])

  // =========================
  // REGISTRO SALVO
  // =========================

  async function registroSalvo() {
    await carregarDados()

    setMostrarFormularioRegistro(false)
  }

  // =========================
  // DESPESA SALVA
  // =========================

  async function despesaSalva() {
    await carregarDados()

    setMostrarFormularioDespesa(false)
  }

  // =========================
  // FORMATAÇÃO DE MOEDA
  // =========================

  function formatarMoeda(valor) {
    return valor.toFixed(2).replace('.', ',')
  }

  // =========================
  // NOME DO PERÍODO
  // =========================

  function nomePeriodo() {
    if (periodo === 'hoje') {
      return 'Hoje'
    }

    if (periodo === 'semana') {
      return 'Semana'
    }

    return 'Mês'
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
        <div
          className="btn-group w-100"
          role="group"
        >

          <button
            type="button"
            className={
              periodo === 'hoje'
                ? 'btn btn-primary'
                : 'btn btn-outline-primary'
            }
            onClick={() => setPeriodo('hoje')}
          >
            Hoje
          </button>

          <button
            type="button"
            className={
              periodo === 'semana'
                ? 'btn btn-primary'
                : 'btn btn-outline-primary'
            }
            onClick={() => setPeriodo('semana')}
          >
            Semana
          </button>

          <button
            type="button"
            className={
              periodo === 'mes'
                ? 'btn btn-primary'
                : 'btn btn-outline-primary'
            }
            onClick={() => setPeriodo('mes')}
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
            R$ {formatarMoeda(dados.liquido)}
          </div>

          <div className="row g-3">

            <div className="col-6">

              <div className="summary-item">

                <span>
                  <i className="bi bi-arrow-up-circle me-1"></i>
                  Ganhos
                </span>

                <strong>
                  R$ {formatarMoeda(dados.ganhos)}
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
                  R$ {formatarMoeda(dados.despesas)}
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
          {nomePeriodo()}
        </span>

      </div>

      <div className="row g-3 mb-4">

        <StatCard
          title="R$/km"
          value={`R$ ${formatarMoeda(dados.valorPorKm)}`}
          icon="bi-signpost-2"
        />

        <StatCard
          title="R$/hora"
          value={`R$ ${formatarMoeda(dados.valorPorHora)}`}
          icon="bi-clock"
        />

        <StatCard
          title="Corridas"
          value={dados.corridas}
          icon="bi-car-front"
        />

        <StatCard
          title="Quilômetros"
          value={`${formatarMoeda(dados.quilometros)} km`}
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

      {/* Formulário de registro */}
      <RegistroForm
        aberto={mostrarFormularioRegistro}
        fechar={() => setMostrarFormularioRegistro(false)}
        onSalvo={registroSalvo}
      />

      {/* Formulário de despesa */}
      <DespesaForm
        aberto={mostrarFormularioDespesa}
        fechar={() => setMostrarFormularioDespesa(false)}
        onSalvo={despesaSalva}
      />

    </div>
  )
}

export default Dashboard