import { useState } from 'react'

import CategoriasForm from '../../components/CategoriasForm'
import Tema from '../../components/Tema'
import Semana from '../../components/Semana'
import Mes from '../../components/Mes'

function Personalizacao() {

  const [mostrarCategorias, setMostrarCategorias] = useState(false)
  const [mostrarTema, setMostrarTema] = useState(false)
  const [mostrarSemana, setMostrarSemana] = useState(false)
  const [mostrarMes, setMostrarMes] = useState(false)

  function abrirCategorias() {
    setMostrarCategorias(true)
  }

  function fecharCategorias() {
    setMostrarCategorias(false)
  }

  function abrirTema() {
    setMostrarTema(true)
  }

  function fecharTema() {
    setMostrarTema(false)
  }

  function abrirSemana() {
    setMostrarSemana(true)
  }

  function fecharSemana() {
    setMostrarSemana(false)
  }

  function abrirMes() {
    setMostrarMes(true)
  }

  function fecharMes() {
    setMostrarMes(false)
  }

  return (
    <>
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
          onClick={abrirTema}
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
          onClick={abrirSemana}
        >
          <span>
            <i className="bi bi-calendar-week me-3"></i>
            Primeiro dia da semana
          </span>

          <i className="bi bi-chevron-right"></i>
        </button>

        <button
          type="button"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          onClick={abrirMes}
        >
          <span>
            <i className="bi bi-calendar-month me-3"></i>
            Primeiro dia do mês
          </span>

          <i className="bi bi-chevron-right"></i>
        </button>

      </div>

      <CategoriasForm
        aberto={mostrarCategorias}
        fechar={fecharCategorias}
      />

      <Tema
        aberto={mostrarTema}
        fechar={fecharTema}
      />

      <Semana
        aberto={mostrarSemana}
        fechar={fecharSemana}
      />

      <Mes
        aberto={mostrarMes}
        fechar={fecharMes}
      />
    </>
  )
}

export default Personalizacao