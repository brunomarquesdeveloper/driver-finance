import { db } from '../db/database'

export async function salvarRegistro(registro) {
  try {
    const id = await db.registros.add(registro)

    console.log('✅ Registro salvo:', id)

    return id
  } catch (error) {
    console.error('❌ Erro ao salvar registro:', error)
    throw error
  }
}

export async function buscarRegistros() {
  try {
    const registros = await db.registros.toArray()

    console.log('📋 Registros encontrados:', registros)

    return registros
  } catch (error) {
    console.error('❌ Erro ao buscar registros:', error)
    throw error
  }
}