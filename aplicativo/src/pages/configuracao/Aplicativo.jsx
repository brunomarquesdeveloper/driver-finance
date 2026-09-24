import { useState } from 'react'

function Aplicativo() {
  const [mostrarModal, setMostrarModal] = useState(false)

  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  })

  const [enviando, setEnviando] = useState(false)
  const [status, setStatus] = useState('')

  function handleChange(e) {
    const { name, value } = e.target

    setFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    setEnviando(true)
    setStatus('')

    try {
      const resposta = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'd7999415-23f0-4e7c-b5d4-9498d8b138ea',

          subject: `Suporte Driver Finance - ${formulario.assunto}`,

          from_name: formulario.nome,

          email: formulario.email,

          nome: formulario.nome,
          email_usuario: formulario.email,
          assunto: formulario.assunto,
          mensagem: formulario.mensagem,
        }),
      })

      const resultado = await resposta.json()

      if (resultado.success) {
        setStatus('Mensagem enviada com sucesso!')

        setFormulario({
          nome: '',
          email: '',
          assunto: '',
          mensagem: '',
        })
      } else {
        setStatus('Não foi possível enviar a mensagem.')
      }
    } catch (erro) {
      console.error(erro)
      setStatus('Erro ao enviar a mensagem. Tente novamente.')
    } finally {
      setEnviando(false)
    }
  }

  function fecharModal() {
    if (enviando) return

    setMostrarModal(false)
    setStatus('')
  }

  return (
    <>
      <h3 className="section-title mb-3">
        <i className="bi bi-phone me-2"></i>
        Aplicativo
      </h3>

      <div className="list-group">

        {/* VERSÃO */}
        <div className="list-group-item d-flex justify-content-between align-items-center">
          <span>
            <i className="bi bi-info-circle me-3"></i>
            Versão do aplicativo
          </span>

          <span className="text-secondary">
            v1.0.0
          </span>
        </div>

        {/* SUPORTE */}
        <button
          type="button"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          onClick={() => setMostrarModal(true)}
        >
          <span>
            <i className="bi bi-question-circle me-3"></i>
            Suporte
          </span>

          <i className="bi bi-chevron-right"></i>
        </button>

      </div>

      {/* MODAL */}
      {mostrarModal && (
        <>
          {/* FUNDO ESCURO */}
          <div
            className="modal-backdrop fade show"
            onClick={fecharModal}
          ></div>

          {/* MODAL */}
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">

                {/* CABEÇALHO */}
                <div className="modal-header">
                  <h5 className="modal-title">
                    <i className="bi bi-headset me-2"></i>
                    Suporte
                  </h5>

                  <button
                    type="button"
                    className="btn-close"
                    onClick={fecharModal}
                    disabled={enviando}
                    aria-label="Fechar"
                  ></button>
                </div>

                {/* CORPO */}
                <div className="modal-body">

                  <p className="text-secondary mb-4">
                    Encontrou algum problema ou tem uma sugestão?
                    Envie uma mensagem e entraremos em contato.
                  </p>

                  <form onSubmit={handleSubmit}>

                    {/* NOME */}
                    <div className="mb-3">
                      <label className="form-label">
                        Nome
                      </label>

                      <input
                        type="text"
                        name="nome"
                        className="form-control"
                        value={formulario.nome}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        required
                      />
                    </div>

                    {/* E-MAIL */}
                    <div className="mb-3">
                      <label className="form-label">
                        E-mail
                      </label>

                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formulario.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>

                    {/* ASSUNTO */}
                    <div className="mb-3">
                      <label className="form-label">
                        Assunto
                      </label>

                      <select
                        name="assunto"
                        className="form-select"
                        value={formulario.assunto}
                        onChange={handleChange}
                        required
                      >
                        <option value="">
                          Selecione uma opção
                        </option>

                        <option value="Problema no aplicativo">
                          Problema no aplicativo
                        </option>

                        <option value="Dúvida">
                          Dúvida
                        </option>

                        <option value="Sugestão">
                          Sugestão
                        </option>

                        <option value="Outro">
                          Outro
                        </option>
                      </select>
                    </div>

                    {/* MENSAGEM */}
                    <div className="mb-3">
                      <label className="form-label">
                        Mensagem
                      </label>

                      <textarea
                        name="mensagem"
                        className="form-control"
                        rows="5"
                        value={formulario.mensagem}
                        onChange={handleChange}
                        placeholder="Descreva como podemos ajudar..."
                        required
                      ></textarea>
                    </div>

                    {/* STATUS */}
                    {status && (
                      <div className="alert alert-info">
                        {status}
                      </div>
                    )}

                    {/* BOTÕES */}
                    <div className="d-flex gap-2">

                      <button
                        type="button"
                        className="btn btn-secondary flex-fill"
                        onClick={fecharModal}
                        disabled={enviando}
                      >
                        Cancelar
                      </button>

                      <button
                        type="submit"
                        className="btn btn-primary flex-fill"
                        disabled={enviando}
                      >
                        {enviando ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              aria-hidden="true"
                            ></span>

                            Enviando...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send me-2"></i>
                            Enviar
                          </>
                        )}
                      </button>

                    </div>

                  </form>

                </div>

              </div>
            </div>
          </div>
        </>
      )}

    </>
  )
}

export default Aplicativo