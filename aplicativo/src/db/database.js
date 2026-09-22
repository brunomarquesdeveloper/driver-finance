import Dexie from 'dexie'

export const db = new Dexie('driver_finance')

db.version(2).stores({
  registros: '++id, data',
  despesas: '++id, data, categoria',
  configuracoes: '++id, chave'
})

db.open()
  .then(() => {
    console.log('✅ Banco aberto:', db.name)
    console.log(
      '📦 Tabelas:',
      db.tables.map(table => table.name)
    )
  })
  .catch(error => {
    console.error('❌ Erro ao abrir banco:', error)
  })