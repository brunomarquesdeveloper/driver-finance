import { db } from '../db/database'

export async function salvarDespesa(despesa) {
  try {
    const id = await db.despesas.add(despesa)

    console.log('✅ Despesa salva:', id)

    return id
  } catch (error) {
    console.error('❌ Erro ao salvar despesa:', error)
    throw error
  }
}

export async function buscarDespesas() {
  try {
    const despesas = await db.despesas.toArray()

    console.log('📋 Despesas encontradas:', despesas)

    return despesas
  } catch (error) {
    console.error('❌ Erro ao buscar despesas:', error)
    throw error
  }
}