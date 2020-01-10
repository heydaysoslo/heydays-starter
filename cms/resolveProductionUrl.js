export default function resolveProductionUrl(document) {
  return `http://martins-mini.heydays.local:3000/_preview/${document._id}`
}
