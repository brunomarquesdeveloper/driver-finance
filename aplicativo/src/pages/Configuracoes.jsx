import Personalizacao from "./configuracao/Personalizacao"
import Dados from "./configuracao/Dados"
import Aplicativo from "./configuracao/Aplicativo"

function Configuracoes() {

  return (

    <div className="container py-4">

      <h2 className="h4 fw-bold mb-1">
        Configurações
      </h2>

      <p className="text-secondary small mb-4">
        Configure o Driver Finance.
      </p>

      <Personalizacao />

      <Dados />

      <Aplicativo />

    </div>

  )
}

export default Configuracoes