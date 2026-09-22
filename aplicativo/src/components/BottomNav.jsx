import { NavLink } from 'react-router-dom'

function BottomNav() {
  const items = [
    {
      label: 'Início',
      icon: 'bi-house',
      path: '/'
    },
    {
      label: 'Registros',
      icon: 'bi-journal-text',
      path: '/registros'
    },
    {
      label: 'Despesas',
      icon: 'bi-receipt',
      path: '/despesas'
    },
    {
      label: 'Config.',
      icon: 'bi-gear',
      path: '/configuracoes'
    }
  ]

  return (
    <nav className="bottom-nav">
      <div className="container">
        <div className="row g-0">

          {items.map((item) => (
            <div className="col-3" key={item.path}>

              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `bottom-nav-item ${isActive ? 'active' : ''
                  }`
                }
              >
                <i className={`bi ${item.icon}`}></i>
                <span>{item.label}</span>
              </NavLink>

            </div>
          ))}

        </div>
      </div>
    </nav>
  )
}

export default BottomNav
