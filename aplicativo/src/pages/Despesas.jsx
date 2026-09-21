function Despesas() {
  return (
    <div className="container py-4">

      <h2 className="h4 fw-bold mb-1">
        Despesas
      </h2>

      <p className="text-secondary small mb-4">
        Controle os custos do seu trabalho.
      </p>

      <div className="card empty-card">
        <div className="card-body text-center py-5">

          <i className="bi bi-receipt display-5 text-secondary"></i>

          <h3 className="h6 fw-bold mt-3">
            Nenhuma despesa registrada
          </h3>

          <p className="text-secondary small mb-0">
            Combustível, alimentação, aluguel e
            outras despesas aparecerão aqui.
          </p>

        </div>
      </div>

    </div>
  )
}

export default Despesas