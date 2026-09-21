function Corridas() {
  return (
    <div className="container py-4">

      <h2 className="h4 fw-bold mb-1">
        Corridas
      </h2>

      <p className="text-secondary small mb-4">
        Registre e acompanhe suas corridas.
      </p>

      <div className="card empty-card">
        <div className="card-body text-center py-5">

          <i className="bi bi-car-front display-5 text-secondary"></i>

          <h3 className="h6 fw-bold mt-3">
            Nenhuma corrida registrada
          </h3>

          <p className="text-secondary small mb-0">
            Suas corridas aparecerão aqui.
          </p>

        </div>
      </div>

    </div>
  )
}

export default Corridas