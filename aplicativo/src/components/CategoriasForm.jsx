import { useEffect, useState } from 'react'
import { buscarCategorias, salvarCategorias } from '../services/configuracoes'

function CategoriasForm({ aberto, fechar }) {
  const [categorias, setCategorias] = useState([])
  const [arrastando, setArrastando] = useState(null)

  const [mostrarAdicionar, setMostrarAdicionar] = useState(false)
  const [novaCategoria, setNovaCategoria] = useState('')

  const [categoriaExcluir, setCategoriaExcluir] = useState(null)

  useEffect(() => {
    async function carregarCategorias() {
      try {
        const dados = await buscarCategorias()

        setCategorias(
          [...dados].sort((a, b) => a.ordem - b.ordem)
        )
      } catch (error) {
        console.error('❌ Erro ao carregar categorias:', error)
      }
    }

    if (aberto) {
      carregarCategorias()
    }
  }, [aberto])

  function iniciarArraste(index) {
    setArrastando(index)
  }

  async function soltar(index) {
    if (arrastando === null || arrastando === index) {
      setArrastando(null)
      return
    }

    const novaLista = [...categorias]

    const item = novaLista.splice(arrastando, 1)[0]

    novaLista.splice(index, 0, item)

    const categoriasOrdenadas = novaLista.map(
      (categoria, index) => ({
        ...categoria,
        ordem: index + 1
      })
    )

    try {
      await salvarCategorias(categoriasOrdenadas)

      setCategorias(categoriasOrdenadas)
    } catch (error) {
      console.error('❌ Erro ao salvar ordem:', error)
      alert('Erro ao salvar a ordem das categorias.')
    }

    setArrastando(null)
  }

  function cancelarArraste() {
    setArrastando(null)
  }

  function abrirAdicionar() {
    setNovaCategoria('')
    setMostrarAdicionar(true)
  }

  function fecharAdicionar() {
    setMostrarAdicionar(false)
    setNovaCategoria('')
  }

  async function adicionarCategoria(event) {
    event.preventDefault()

    const nome = novaCategoria.trim()

    if (!nome) {
      return
    }

    const existe = categorias.some(
      categoria =>
        categoria.nome.toLowerCase() === nome.toLowerCase()
    )

    if (existe) {
      alert('Essa categoria já existe.')
      return
    }

    const novasCategorias = [
      ...categorias,
      {
        nome,
        ordem: categorias.length + 1
      }
    ]

    try {
      await salvarCategorias(novasCategorias)

      setCategorias(novasCategorias)

      fecharAdicionar()
    } catch (error) {
      console.error('❌ Erro ao adicionar categoria:', error)
      alert('Erro ao adicionar categoria.')
    }
  }

  function abrirConfirmacaoExclusao(categoria) {
    setCategoriaExcluir(categoria)
  }

  function cancelarExclusao() {
    setCategoriaExcluir(null)
  }

  async function confirmarExclusao() {
    if (!categoriaExcluir) {
      return
    }

    const novaLista = categorias
      .filter(
        categoria =>
          categoria.nome !== categoriaExcluir.nome
      )
      .map((categoria, index) => ({
        ...categoria,
        ordem: index + 1
      }))

    try {
      await salvarCategorias(novaLista)

      setCategorias(novaLista)

      setCategoriaExcluir(null)
    } catch (error) {
      console.error('❌ Erro ao excluir categoria:', error)
      alert('Erro ao excluir categoria.')
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
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title fw-bold">
                Categorias de despesas
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
                Arraste para alterar a ordem. Toque em uma categoria para excluir.
              </p>

              <div className="list-group mb-3">
                {categorias.map((categoria, index) => (
                  <div
                    key={categoria.nome}
                    className="list-group-item d-flex align-items-center"
                    draggable
                    onDragStart={() => iniciarArraste(index)}
                    onDragOver={event => event.preventDefault()}
                    onDrop={() => soltar(index)}
                    onDragEnd={cancelarArraste}
                    onClick={() => abrirConfirmacaoExclusao(categoria)}
                    style={{
                      cursor: 'grab'
                    }}
                  >
                    <i className="bi bi-grip-vertical text-secondary me-3"></i>

                    <span className="flex-grow-1">
                      {categoria.nome}
                    </span>
                  </div>
                ))}
              </div>

              {categorias.length === 0 && (
                <p className="text-secondary text-center mb-3">
                  Nenhuma categoria cadastrada.
                </p>
              )}

              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={abrirAdicionar}
              >
                <i className="bi bi-plus-lg me-2"></i>
                Adicionar categoria
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* Modal adicionar */}
      {mostrarAdicionar && (
        <>
          <div className="modal-backdrop fade show"></div>

          <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          >
            <div
              className="modal-dialog modal-dialog-centered"
              role="document"
            >
              <div className="modal-content">

                <div className="modal-header">
                  <h5 className="modal-title fw-bold">
                    Nova categoria
                  </h5>

                  <button
                    type="button"
                    className="btn-close"
                    onClick={fecharAdicionar}
                    aria-label="Fechar"
                  ></button>
                </div>

                <form onSubmit={adicionarCategoria}>
                  <div className="modal-body">

                    <label className="form-label">
                      Nome da categoria
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      value={novaCategoria}
                      onChange={event =>
                        setNovaCategoria(event.target.value)
                      }
                      placeholder="Ex.: Estacionamento"
                      autoFocus
                    />

                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={fecharAdicionar}
                    >
                      Cancelar
                    </button>

                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Adicionar
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </>
      )}

      {/* Modal confirmar exclusão */}
      {categoriaExcluir && (
        <>
          <div className="modal-backdrop fade show"></div>

          <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          >
            <div
              className="modal-dialog modal-dialog-centered"
              role="document"
            >
              <div className="modal-content">

                <div className="modal-header">
                  <h5 className="modal-title fw-bold">
                    Excluir categoria
                  </h5>

                  <button
                    type="button"
                    className="btn-close"
                    onClick={cancelarExclusao}
                    aria-label="Fechar"
                  ></button>
                </div>

                <div className="modal-body">
                  <p className="mb-0">
                    Deseja excluir a categoria{' '}
                    <strong>{categoriaExcluir.nome}</strong>?
                  </p>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={cancelarExclusao}
                  >
                    Cancelar
                  </button>

                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={confirmarExclusao}
                  >
                    Excluir
                  </button>
                </div>

              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default CategoriasForm