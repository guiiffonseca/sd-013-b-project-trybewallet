export default function getCambio(value, ask) {
  return Math.round((value * ask) * 100) / 100;
}
