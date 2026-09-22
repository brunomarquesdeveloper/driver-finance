import { db } from '../db/database'

const CHAVE_CATEGORIAS = 'categorias_despesas'

const categoriasPadrao = [
  { nome: 'Combustível', ordem: 1 },
  { nome: 'Alimentação', ordem: 2 },
  { nome: 'Aluguel', ordem: 3 },
  { nome: 'Manutenção', ordem: 4 },
  { nome: 'Lavagem', ordem: 5 },
  { nome: 'Outros', ordem: 6 }
]

export async function buscarCategorias() {
  try {
    const configuracao = await db.configuracoes
      .where('chave')
      .equals(CHAVE_CATEGORIAS)
      .first()

    if (!configuracao) {
      await db.configuracoes.add({
        chave: CHAVE_CATEGORIAS,
        valor: categoriasPadrao
      })

      return categoriasPadrao
    }

    return configuracao.valor
  } catch (error) {
    console.error('❌ Erro ao buscar categorias:', error)
    throw error
  }
}

export async function salvarCategorias(categorias) {
  try {
    const configuracao = await db.configuracoes
      .where('chave')
      .equals(CHAVE_CATEGORIAS)
      .first()

    if (!configuracao) {
      await db.configuracoes.add({
        chave: CHAVE_CATEGORIAS,
        valor: categorias
      })
    } else {
      await db.configuracoes.update(configuracao.id, {
        valor: categorias
      })
    }

    console.log('✅ Categorias salvas:', categorias)
  } catch (error) {
    console.error('❌ Erro ao salvar categorias:', error)
    throw error
  }
}