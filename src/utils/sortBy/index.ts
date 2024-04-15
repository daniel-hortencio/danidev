export function sortBy(
  data: any[],
  field: string,
  order: "desc" | "asc" = "asc",
) {
  const orders = {
    desc: 1,
    asc: -1,
  };

  return data.sort((a, b) => {
    const paramA = a[field];
    const paramB = b[field];
    if (paramA < paramB) {
      return orders[order];
    }
    if (paramA > paramB) {
      return -1 * orders[order];
    }

    return 0;
  });
}
