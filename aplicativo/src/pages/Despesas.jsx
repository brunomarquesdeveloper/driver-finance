import { useEffect, useState } from 'react'
import { buscarDespesas } from '../services/despesas'
import DespesaForm from '../components/DespesaForm'

function Despesas() {
  const [despesas, setDespesas] = useState([])
  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  async function carregarDespesas() {
    try {
      const dados = await buscarDespesas()
      setDespesas(dados)
    } catch (error) {
      console.error('❌ Erro ao carregar despesas:', error)
    }
  }

  useEffect(() => {
    carregarDespesas()
  }, [])

  function abrirFormulario() {
    setMostrarFormulario(true)
  }

  return (
    <div className="container py-4">

      <div className="d-flex justify-content-between align-items-center mb-1">

        <div>
          <h2 className="h4 fw-bold mb-1">
            Despesas
          </h2>

          <p className="text-secondary small mb-0">
            Controle os custos do seu trabalho.
          </p>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={abrirFormulario}
        >
          <i className="bi bi-plus-lg me-2"></i>
          Adicionar despesas
        </button>

      </div>

      {despesas.length === 0 ? (

        <div className="card empty-card mt-4">

          <div className="card-body text-center py-5">

            <i className="bi bi-receipt display-5 text-secondary"></i>

            <h3 className="h6 fw-bold mt-3">
              Nenhuma despesa registrada
            </h3>

            <p className="text-secondary small mb-0">
              Combustível, alimentação, aluguel e
              outras despesas aparecerão aqui.
            </p>

          </div>

        </div>

      ) : (

        <div className="mt-4">

          {despesas.map(despesa => (

            <div
              key={despesa.id}
              className="card mb-3"
            >

              <div className="card-body">

                <div className="d-flex justify-content-between align-items-center">

                  <div>
                    <h3 className="h6 fw-bold mb-1">
                      {despesa.categoria}
                    </h3>

                    <small className="text-secondary">
                      {despesa.data.split('-').reverse().join('/')}
                    </small>
                  </div>

                  <strong>
                    {despesa.valor.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </strong>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

      <DespesaForm
        aberto={mostrarFormulario}
        fechar={() => setMostrarFormulario(false)}
        onSalvo={carregarDespesas}
      />

    </div>
  )
}

export default Despesas