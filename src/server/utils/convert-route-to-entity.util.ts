const mapping: Record<string, string> = {
  bids: 'bid',
  manufacturers: 'manufacturer',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
