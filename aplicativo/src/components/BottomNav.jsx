function BottomNav() {
  const items = [
    {
      label: 'Início',
      icon: 'bi-house-fill',
      active: true
    },
    {
      label: 'Corridas',
      icon: 'bi-car-front'
    },
    {
      label: 'Despesas',
      icon: 'bi-receipt'
    },
    {
      label: 'Config.',
      icon: 'bi-gear'
    }
  ]

  return (
    <nav className="bottom-nav">
      <div className="container">
        <div className="row g-0">
          {items.map((item) => (
            <div className="col-3" key={item.label}>
              <button
                type="button"
                className={`bottom-nav-item ${
                  item.active ? 'active' : ''
                }`}
              >
                <i className={`bi ${item.icon}`}></i>

                <span>{item.label}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default BottomNav