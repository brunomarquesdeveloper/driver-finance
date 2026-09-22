import { useState } from 'react'

import CategoriasForm from '../components/CategoriasForm'

function Configuracoes() {

  const [mostrarCategorias, setMostrarCategorias] = useState(false)

  function abrirCategorias() {
    setMostrarCategorias(true)
  }
  function fecharCategorias() {
    setMostrarCategorias(false)
  }

  return (

    <div className="container py-4">

      <h2 className="h4 fw-bold mb-1">
        Configurações
      </h2>

      <p className="text-secondary small mb-4">
        Configure o Driver Finance.
      </p>

      {/* Personalização */}

      <h3 className="section-title mb-3">
        <i className="bi bi-sliders me-2"></i>
        Personalização
      </h3>

      <div className="list-group mb-4">

        <button
          type="button"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          onClick={abrirCategorias}
        >
          <span>
            <i className="bi bi-tags me-3"></i>
            Categorias de despesas
          </span>

          <i className="bi bi-chevron-right"></i>
        </button>

        <button
          type="button"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <span>
            <i className="bi bi-circle-half me-3"></i>
            Tema
          </span>

          <i className="bi bi-chevron-right"></i>
        </button>

        <button
          type="button"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <span>
            <i className="bi bi-calendar-week me-3"></i>
            Primeiro dia da semana
          </span>

          <i className="bi bi-chevron-right"></i>
        </button>

      </div>


      {/* Dados */}

      <h3 className="section-title mb-3">
        <i className="bi bi-database me-2"></i>
        Dados
      </h3>

      <div className="list-group mb-4">

        <button
          type="button"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <span>
            <i className="bi bi-download me-3"></i>
            Exportar dados
          </span>

          <i className="bi bi-chevron-right"></i>
        </button>

        <button
          type="button"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <span>
            <i className="bi bi-trash3 me-3"></i>
            Limpar registros
          </span>

          <i className="bi bi-chevron-right"></i>
        </button>

        <button
          type="button"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <span>
            <i className="bi bi-trash3 me-3"></i>
            Limpar despesas
          </span>

          <i className="bi bi-chevron-right"></i>
        </button>

        <button
          type="button"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center text-danger"
        >
          <span>
            <i className="bi bi-exclamation-triangle me-3"></i>
            Apagar todos os dados
          </span>

          <i className="bi bi-chevron-right"></i>
        </button>

      </div>


      {/* Aplicativo */}

      <h3 className="section-title mb-3">
        <i className="bi bi-phone me-2"></i>
        Aplicativo
      </h3>

      <div className="list-group">

        <div
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>
            <i className="bi bi-info-circle me-3"></i>
            Versão do aplicativo
          </span>

          <span className="text-secondary small">
            v1.0.0
          </span>
        </div>

        <button
          type="button"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <span>
            <i className="bi bi-question-circle me-3"></i>
            Suporte
          </span>

          <i className="bi bi-chevron-right"></i>
        </button>

        <button
          type="button"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <span>
            <i className="bi bi-device-hdd me-3"></i>
            Status do armazenamento
          </span>

          <i className="bi bi-chevron-right"></i>
        </button>

      </div>

      <CategoriasForm
        aberto={mostrarCategorias}
        fechar={fecharCategorias}
      />

    </div>

  )

}

export default Configuracoes
