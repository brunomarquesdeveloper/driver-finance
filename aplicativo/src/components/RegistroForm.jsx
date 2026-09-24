import { useState } from 'react'

import { salvarRegistro } from '../services/registros'

function RegistroForm({ aberto, fechar, onSalvo }) {
  const [form, setForm] = useState({
    data: new Date().toISOString().split('T')[0],
    ganhosBrutos: '',
    tempoTrabalhado: '',
    kmPercorridos: '',
    quantidadeCorridas: '',
    plataformas: []
  })

  const [salvando, setSalvando] = useState(false)

  const plataformasDisponiveis = [
    'Uber',
    '99',
    'InDrive',
    'Outra'
  ]

  function handleChange(event) {
    const { name, value } = event.target

    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function handlePlataformaChange(plataforma) {
    setForm(prev => {
      const selecionadas = prev.plataformas

      if (selecionadas.includes(plataforma)) {
        return {
          ...prev,
          plataformas: selecionadas.filter(
            item => item !== plataforma
          )
        }
      }

      return {
        ...prev,
        plataformas: [...selecionadas, plataforma]
      }
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    if (
      !form.data ||
      !form.ganhosBrutos ||
      !form.tempoTrabalhado ||
      !form.kmPercorridos ||
      !form.quantidadeCorridas ||
      form.plataformas.length === 0
    ) {
      return
    }

    try {
      setSalvando(true)

      await salvarRegistro({
        data: form.data,
        ganhosBrutos: Number(form.ganhosBrutos),
        tempoTrabalhado: form.tempoTrabalhado,
        kmPercorridos: Number(form.kmPercorridos),
        quantidadeCorridas: Number(form.quantidadeCorridas),
        plataformas: form.plataformas
      })

      setForm({
        data: new Date().toISOString().split('T')[0],
        ganhosBrutos: '',
        tempoTrabalhado: '',
        kmPercorridos: '',
        quantidadeCorridas: '',
        plataformas: []
      })

      if (onSalvo) {
        onSalvo()
      }

      fechar()
    } catch (error) {
      console.error('❌ Erro ao salvar registro:', error)
      alert('Erro ao salvar registro.')
    } finally {
      setSalvando(false)
    }
  }

  if (!aberto) {
    return null
  }

  return (
    <>
      {/* Backdrop */}
      <div className="modal-backdrop fade show"></div>

      {/* Modal */}
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <div
          className="modal-dialog modal-fullscreen"
          role="document"
        >
          <div className="modal-content">

            {/* Cabeçalho */}
            <div className="modal-header">
              <div>
                <h2 className="h5 fw-bold mb-1">
                  Registro diário
                </h2>

                <p className="text-secondary small mb-0">
                  Registre os dados do seu dia de trabalho.
                </p>
              </div>

              <button
                type="button"
                className="btn-close"
                aria-label="Fechar"
                onClick={fechar}
              ></button>
            </div>

            {/* Corpo */}
            <div className="modal-body">

              <form
                onSubmit={handleSubmit}
                id="registroForm"
              >

                {/* Data */}
                <div className="mb-3">
                  <label className="form-label">
                    Data
                  </label>

                  <input
                    type="date"
                    className="form-control"
                    name="data"
                    value={form.data}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Ganhos */}
                <div className="mb-3">
                  <label className="form-label">
                    Ganhos brutos
                  </label>

                  <div className="input-group">
                    <span className="input-group-text">
                      R$
                    </span>

                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      className="form-control"
                      name="ganhosBrutos"
                      value={form.ganhosBrutos}
                      onChange={handleChange}
                      placeholder="0,00"
                      required
                    />
                  </div>
                </div>

                {/* Tempo */}
                <div className="mb-3">
                  <label className="form-label">
                    Tempo trabalhado
                  </label>

                  <input
                    type="time"
                    className="form-control"
                    name="tempoTrabalhado"
                    value={form.tempoTrabalhado}
                    onChange={handleChange}
                    required
                  />

                  <div className="form-text">
                    Informe o tempo total trabalhado no dia.
                  </div>
                </div>

                {/* KM */}
                <div className="mb-3">
                  <label className="form-label">
                    KM percorridos
                  </label>

                  <div className="input-group">
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      className="form-control"
                      name="kmPercorridos"
                      value={form.kmPercorridos}
                      onChange={handleChange}
                      placeholder="0,0"
                      required
                    />

                    <span className="input-group-text">
                      km
                    </span>
                  </div>
                </div>

                {/* Corridas */}
                <div className="mb-3">
                  <label className="form-label">
                    Quantidade de corridas
                  </label>

                  <input
                    type="number"
                    min="0"
                    className="form-control"
                    name="quantidadeCorridas"
                    value={form.quantidadeCorridas}
                    onChange={handleChange}
                    placeholder="0"
                    required
                  />
                </div>

                {/* Plataformas */}
                <div className="mb-4">
                  <label className="form-label">
                    Plataformas utilizadas
                  </label>

                  <div className="border rounded p-2">
                    {plataformasDisponiveis.map(plataforma => (
                      <div
                        className="form-check py-2"
                        key={plataforma}
                      >
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`plataforma-${plataforma}`}
                          checked={form.plataformas.includes(plataforma)}
                          onChange={() =>
                            handlePlataformaChange(plataforma)
                          }
                        />

                        <label
                          className="form-check-label w-100"
                          htmlFor={`plataforma-${plataforma}`}
                        >
                          {plataforma}
                        </label>
                      </div>
                    ))}
                  </div>

                  {form.plataformas.length > 0 && (
                    <div className="mt-2">
                      {form.plataformas.map(plataforma => (
                        <span
                          className="badge text-bg-light me-1"
                          key={plataforma}
                        >
                          {plataforma}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

              </form>
            </div>

            {/* Rodapé */}
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
                form="registroForm"
                className="btn btn-primary"
                disabled={salvando}
              >
                <i className="bi bi-check-lg me-2"></i>

                {salvando
                  ? 'Salvando...'
                  : 'Salvar registro'}
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default RegistroForm