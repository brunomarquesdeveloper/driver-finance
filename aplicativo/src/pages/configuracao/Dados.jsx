import { useEffect, useState } from 'react'

function formatarTamanho(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`
  }

  const kb = bytes / 1024

  if (kb < 1024) {
    return `${kb.toFixed(1)} KB`
  }

  const mb = kb / 1024

  return `${mb.toFixed(2)} MB`
}

function abrirBanco() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('driver_finance')

    request.onsuccess = () => {
      resolve(request.result)
    }

    request.onerror = () => {
      reject(request.error)
    }
  })
}

function obterDados(db, nomeTabela) {
  return new Promise((resolve, reject) => {
    try {
      const transacao = db.transaction(nomeTabela, 'readonly')
      const store = transacao.objectStore(nomeTabela)
      const request = store.getAll()

      request.onsuccess = () => {
        resolve(request.result || [])
      }

      request.onerror = () => {
        reject(request.error)
      }
    } catch (erro) {
      reject(erro)
    }
  })
}

function limparTabelas(db, nomesTabelas) {
  return new Promise((resolve, reject) => {
    try {
      const transacao = db.transaction(
        nomesTabelas,
        'readwrite'
      )

      transacao.oncomplete = () => {
        resolve()
      }

      transacao.onerror = () => {
        reject(transacao.error)
      }

      transacao.onabort = () => {
        reject(
          transacao.error ||
          new Error('Transação cancelada.')
        )
      }

      nomesTabelas.forEach((nomeTabela) => {
        transacao
          .objectStore(nomeTabela)
          .clear()
      })
    } catch (erro) {
      reject(erro)
    }
  })
}

function Dados() {
  const [tamanhoDados, setTamanhoDados] = useState(0)

  const [modalAberto, setModalAberto] = useState(false)

  const [acaoSelecionada, setAcaoSelecionada] =
    useState(null)

  const [processando, setProcessando] =
    useState(false)

  const [mensagem, setMensagem] =
    useState('')

  const [tipoMensagem, setTipoMensagem] =
    useState('')

  async function atualizarTamanho() {
    let db = null

    try {
      db = await abrirBanco()

      const nomesTabelas = [
        'registros',
        'despesas',
        'configuracoes'
      ]

      let totalBytes = 0

      for (const nomeTabela of nomesTabelas) {
        const dados = await obterDados(
          db,
          nomeTabela
        )

        totalBytes += new Blob([
          JSON.stringify(dados)
        ]).size
      }

      setTamanhoDados(totalBytes)
    } catch (erro) {
      console.error(
        'Erro ao calcular armazenamento:',
        erro
      )
    } finally {
      if (db) {
        db.close()
      }
    }
  }

  useEffect(() => {
    atualizarTamanho()
  }, [])

  function abrirModal(acao) {
    setAcaoSelecionada(acao)
    setMensagem('')
    setTipoMensagem('')
    setModalAberto(true)
  }

  function fecharModal() {
    if (processando) {
      return
    }

    setModalAberto(false)
    setAcaoSelecionada(null)
    setMensagem('')
    setTipoMensagem('')
  }

  function obterInformacoesModal() {
    if (acaoSelecionada === 'registros') {
      return {
        titulo: 'Limpar registros',
        mensagem:
          'Tem certeza que deseja apagar todos os registros? Essa ação não pode ser desfeita.',
        botao: 'Limpar registros'
      }
    }

    if (acaoSelecionada === 'despesas') {
      return {
        titulo: 'Limpar despesas',
        mensagem:
          'Tem certeza que deseja apagar todas as despesas? Essa ação não pode ser desfeita.',
        botao: 'Limpar despesas'
      }
    }

    return {
      titulo: 'Apagar todos os dados',
      mensagem:
        'Todos os registros, despesas e configurações serão apagados. Essa ação não pode ser desfeita.',
      botao: 'Apagar todos os dados'
    }
  }

  async function confirmarAcao() {
    if (!acaoSelecionada || processando) {
      return
    }

    setProcessando(true)
    setMensagem('')
    setTipoMensagem('')

    let db = null

    try {
      db = await abrirBanco()

      let tabelasParaLimpar = []
      let mensagemSucesso = ''

      if (acaoSelecionada === 'registros') {
        tabelasParaLimpar = ['registros']

        mensagemSucesso =
          'Todos os registros foram apagados com sucesso.'
      }

      if (acaoSelecionada === 'despesas') {
        tabelasParaLimpar = ['despesas']

        mensagemSucesso =
          'Todas as despesas foram apagadas com sucesso.'
      }

      if (acaoSelecionada === 'todos') {
        tabelasParaLimpar = [
          'registros',
          'despesas',
          'configuracoes'
        ]

        mensagemSucesso =
          'Todos os dados foram apagados com sucesso.'
      }

      await limparTabelas(
        db,
        tabelasParaLimpar
      )

      setMensagem(mensagemSucesso)
      setTipoMensagem('sucesso')

      db.close()
      db = null

      await atualizarTamanho()
    } catch (erro) {
      console.error(
        'Erro ao apagar dados:',
        erro
      )

      setMensagem(
        'Não foi possível concluir a operação.'
      )

      setTipoMensagem('erro')
    } finally {
      if (db) {
        db.close()
      }

      setProcessando(false)
    }
  }

  const informacoes =
    obterInformacoesModal()

  return (
    <>
      <h3 className="section-title mb-3">
        <i className="bi bi-database me-2"></i>
        Dados
      </h3>

      <div className="list-group mb-4">

        <div className="list-group-item d-flex justify-content-between align-items-center">
          <span>
            <i className="bi bi-hdd me-3"></i>
            Dados utilizados
          </span>

          <span className="text-muted">
            {formatarTamanho(tamanhoDados)}
          </span>
        </div>

        <button
          type="button"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          onClick={() =>
            abrirModal('registros')
          }
        >
          <span>
            <i className="bi bi-trash me-3"></i>
            Limpar registros
          </span>

          <i className="bi bi-chevron-right"></i>
        </button>

        <button
          type="button"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          onClick={() =>
            abrirModal('despesas')
          }
        >
          <span>
            <i className="bi bi-trash me-3"></i>
            Limpar despesas
          </span>

          <i className="bi bi-chevron-right"></i>
        </button>

        <button
          type="button"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center text-danger"
          onClick={() =>
            abrirModal('todos')
          }
        >
          <span>
            <i className="bi bi-exclamation-triangle me-3"></i>
            Apagar todos os dados
          </span>

          <i className="bi bi-chevron-right"></i>
        </button>

      </div>

      {modalAberto && (
        <>
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
                    {tipoMensagem === 'sucesso'
                      ? 'Concluído'
                      : tipoMensagem === 'erro'
                        ? 'Erro'
                        : informacoes.titulo}
                  </h5>

                  {!processando && (
                    <button
                      type="button"
                      className="btn-close"
                      onClick={fecharModal}
                      aria-label="Fechar"
                    ></button>
                  )}
                </div>

                <div className="modal-body">

                  {tipoMensagem === '' && (
                    <p className="mb-0">
                      {informacoes.mensagem}
                    </p>
                  )}

                  {tipoMensagem === 'sucesso' && (
                    <p className="mb-0 text-success">
                      <i className="bi bi-check-circle me-2"></i>
                      {mensagem}
                    </p>
                  )}

                  {tipoMensagem === 'erro' && (
                    <p className="mb-0 text-danger">
                      <i className="bi bi-exclamation-circle me-2"></i>
                      {mensagem}
                    </p>
                  )}

                </div>

                <div className="modal-footer">

                  {tipoMensagem === '' && (
                    <>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={fecharModal}
                        disabled={processando}
                      >
                        Cancelar
                      </button>

                      <button
                        type="button"
                        className={
                          acaoSelecionada === 'todos'
                            ? 'btn btn-danger'
                            : 'btn btn-primary'
                        }
                        onClick={confirmarAcao}
                        disabled={processando}
                      >
                        {processando ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              aria-hidden="true"
                            ></span>
                            Aguarde...
                          </>
                        ) : (
                          informacoes.botao
                        )}
                      </button>
                    </>
                  )}

                  {(tipoMensagem === 'sucesso' ||
                    tipoMensagem === 'erro') && (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={fecharModal}
                    >
                      Fechar
                    </button>
                  )}

                </div>

              </div>
            </div>
          </div>

          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </>
  )
}

export default Dados