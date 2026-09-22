import { useState } from 'react'
import { salvarDespesa } from '../services/despesas'

function DespesaForm({ aberto, fechar, onSalvo }) {
  const [form, setForm] = useState({
    data: new Date().toISOString().split('T')[0],
    valor: '',
    categoria: ''
  })

  const [salvando, setSalvando] = useState(false)

  const categorias = [
    'Combustível',
    'Alimentação',
    'Aluguel',
    'Manutenção',
    'Lavagem',
    'Outros'
  ]

  function handleChange(event) {
    const { name, value } = event.target

    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    if (
      !form.valor ||
      !form.categoria
    ) {
      return
    }

    try {
      setSalvando(true)

      await salvarDespesa({
        data: form.data,
        valor: Number(form.valor),
        categoria: form.categoria
      })

      setForm({
        data: new Date().toISOString().split('T')[0],
        valor: '',
        categoria: ''
      })

      if (onSalvo) {
        onSalvo()
      }

      fechar()
    } catch (error) {
      console.error('❌ Erro ao salvar despesa:', error)
      alert('Erro ao salvar despesa.')
    } finally {
      setSalvando(false)
    }
  }

  if (!aberto) {
    return null
  }

  return (
    <>
      <div className="modal-backdrop fade show"></div>

      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <div className="modal-dialog modal-fullscreen" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title fw-bold">
                Nova despesa
              </h5>

              <button
                type="button"
                className="btn-close"
                onClick={fechar}
                aria-label="Fechar"
              ></button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-body">

                <div className="mb-3">
                  <label className="form-label">
                    Data
                  </label>

                  <input
                    type="date"
                    name="data"
                    className="form-control"
                    value={form.data}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Valor
                  </label>

                  <input
                    type="number"
                    name="valor"
                    className="form-control"
                    placeholder="0,00"
                    min="0"
                    step="0.01"
                    value={form.valor}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Categoria
                  </label>

                  <select
                    name="categoria"
                    className="form-select"
                    value={form.categoria}
                    onChange={handleChange}
                  >
                    <option value="">
                      Selecione uma categoria
                    </option>

                    {categorias.map(categoria => (
                      <option
                        key={categoria}
                        value={categoria}
                      >
                        {categoria}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={fechar}
                  disabled={salvando}
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={salvando}
                >
                  {salvando ? 'Salvando...' : 'Salvar despesa'}
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default DespesaForm