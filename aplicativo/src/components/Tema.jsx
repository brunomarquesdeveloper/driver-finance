import { useEffect, useState } from 'react'

function Tema({ aberto, fechar }) {

    const [tema, setTema] = useState(
        localStorage.getItem('tema') || 'automatico'
    )

    useEffect(() => {
        aplicarTema(tema)
    }, [tema])

    function alterarTema(novoTema) {

        setTema(novoTema)

        localStorage.setItem('tema', novoTema)

    }

    function aplicarTema(novoTema) {

        const html = document.documentElement

        if (novoTema === 'claro') {

            html.setAttribute('data-bs-theme', 'light')

        }

        if (novoTema === 'escuro') {

            html.setAttribute('data-bs-theme', 'dark')

        }

        if (novoTema === 'automatico') {

            const prefereEscuro = window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches

            html.setAttribute(
                'data-bs-theme',
                prefereEscuro ? 'dark' : 'light'
            )

        }

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
                            Tema
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
                                className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${tema === 'claro' ? 'active' : ''
                                    }`}
                                onClick={() => alterarTema('claro')}
                            >

                                <span>
                                    <i className="bi bi-sun me-3"></i>
                                    Claro
                                </span>

                                {tema === 'claro' && (
                                    <i className="bi bi-check-lg"></i>
                                )}

                            </button>

                            <button
                                type="button"
                                className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${tema === 'escuro' ? 'active' : ''
                                    }`}
                                onClick={() => alterarTema('escuro')}
                            >

                                <span>
                                    <i className="bi bi-moon me-3"></i>
                                    Escuro
                                </span>

                                {tema === 'escuro' && (
                                    <i className="bi bi-check-lg"></i>
                                )}

                            </button>

                            <button
                                type="button"
                                className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${tema === 'automatico' ? 'active' : ''
                                    }`}
                                onClick={() => alterarTema('automatico')}
                            >

                                <span>
                                    <i className="bi bi-circle-half me-3"></i>
                                    Automático
                                </span>

                                {tema === 'automatico' && (
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

export default Tema