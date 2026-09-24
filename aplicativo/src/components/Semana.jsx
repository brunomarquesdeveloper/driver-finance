import { useState } from 'react'

function Semana({ aberto, fechar }) {

    const [dia, setDia] = useState(
        localStorage.getItem('primeiroDiaSemana') || 'segunda'
    )

    function alterarDia(novoDia) {

        setDia(novoDia)

        localStorage.setItem('primeiroDiaSemana', novoDia)

    }

    if (!aberto) {
        return null
    }

    return (

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
                            Primeiro dia da semana
                        </h5>

                        <button
                            type="button"
                            className="btn-close"
                            onClick={fechar}
                            aria-label="Fechar"
                        ></button>

                    </div>

                    <div className="modal-body">

                        <div className="list-group">

                            <button
                                type="button"
                                className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${dia === 'domingo' ? 'active' : ''
                                    }`}
                                onClick={() => alterarDia('domingo')}
                            >
                                <span>
                                    <i className="bi bi-calendar-week me-3"></i>
                                    Domingo
                                </span>

                                {dia === 'domingo' && (
                                    <i className="bi bi-check-lg"></i>
                                )}
                            </button>

                            <button
                                type="button"
                                className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${dia === 'segunda' ? 'active' : ''
                                    }`}
                                onClick={() => alterarDia('segunda')}
                            >
                                <span>
                                    <i className="bi bi-calendar-week me-3"></i>
                                    Segunda-feira
                                </span>

                                {dia === 'segunda' && (
                                    <i className="bi bi-check-lg"></i>
                                )}
                            </button>

                            <button
                                type="button"
                                className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${dia === 'terca' ? 'active' : ''
                                    }`}
                                onClick={() => alterarDia('terca')}
                            >
                                <span>
                                    <i className="bi bi-calendar-week me-3"></i>
                                    Terça-feira
                                </span>

                                {dia === 'terca' && (
                                    <i className="bi bi-check-lg"></i>
                                )}
                            </button>

                            <button
                                type="button"
                                className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${dia === 'quarta' ? 'active' : ''
                                    }`}
                                onClick={() => alterarDia('quarta')}
                            >
                                <span>
                                    <i className="bi bi-calendar-week me-3"></i>
                                    Quarta-feira
                                </span>

                                {dia === 'quarta' && (
                                    <i className="bi bi-check-lg"></i>
                                )}
                            </button>

                            <button
                                type="button"
                                className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${dia === 'quinta' ? 'active' : ''
                                    }`}
                                onClick={() => alterarDia('quinta')}
                            >
                                <span>
                                    <i className="bi bi-calendar-week me-3"></i>
                                    Quinta-feira
                                </span>

                                {dia === 'quinta' && (
                                    <i className="bi bi-check-lg"></i>
                                )}
                            </button>

                            <button
                                type="button"
                                className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${dia === 'sexta' ? 'active' : ''
                                    }`}
                                onClick={() => alterarDia('sexta')}
                            >
                                <span>
                                    <i className="bi bi-calendar-week me-3"></i>
                                    Sexta-feira
                                </span>

                                {dia === 'sexta' && (
                                    <i className="bi bi-check-lg"></i>
                                )}
                            </button>

                            <button
                                type="button"
                                className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${dia === 'sabado' ? 'active' : ''
                                    }`}
                                onClick={() => alterarDia('sabado')}
                            >
                                <span>
                                    <i className="bi bi-calendar-week me-3"></i>
                                    Sábado
                                </span>

                                {dia === 'sabado' && (
                                    <i className="bi bi-check-lg"></i>
                                )}
                            </button>

                        </div>

                    </div>

                    <div className="modal-footer">

                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={fechar}
                        >
                            Fechar
                        </button>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Semana