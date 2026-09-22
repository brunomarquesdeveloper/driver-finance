export function calcularDashboard(corridas = []) {
  const ganhosBrutos = corridas.reduce(
    (total, corrida) => total + Number(corrida.ganhosBrutos || 0),
    0
  )

  const kmPercorridos = corridas.reduce(
    (total, corrida) => total + Number(corrida.kmPercorridos || 0),
    0
  )

  const quantidadeCorridas = corridas.reduce(
    (total, corrida) => total + Number(corrida.quantidadeCorridas || 0),
    0
  )

  const minutosTrabalhados = corridas.reduce(
    (total, corrida) => total + Number(corrida.tempoTrabalhado || 0),
    0
  )

  const horasTrabalhadas = minutosTrabalhados / 60

  const valorPorHora =
    horasTrabalhadas > 0
      ? ganhosBrutos / horasTrabalhadas
      : 0

  const valorPorKm =
    kmPercorridos > 0
      ? ganhosBrutos / kmPercorridos
      : 0

  const mediaPorCorrida =
    quantidadeCorridas > 0
      ? ganhosBrutos / quantidadeCorridas
      : 0

  const mediaKmPorCorrida =
    quantidadeCorridas > 0
      ? kmPercorridos / quantidadeCorridas
      : 0

  return {
    ganhosBrutos,
    horasTrabalhadas,
    kmPercorridos,
    quantidadeCorridas,
    valorPorHora,
    valorPorKm,
    mediaPorCorrida,
    mediaKmPorCorrida,
  }
}