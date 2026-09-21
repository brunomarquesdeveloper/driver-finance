function StatCard({ title, value, icon, variant = '' }) {
  return (
    <div className="col-6">
      <div className={`card stat-card h-100 ${variant}`}>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <span className="text-secondary small">
              {title}
            </span>

            <i className={`bi ${icon}`}></i>
          </div>

          <div className="fw-bold fs-5">
            {value}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatCard