export const mapEdgesToNode = data =>
  data.edges ? data.edges.map(edge => edge.node) : []
