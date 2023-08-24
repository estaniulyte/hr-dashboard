type SortDirection = 'asc' | 'desc';

export function sortByKey<T>(array: T[], key: keyof T, direction: SortDirection = 'asc'): T[] {
  const sortedArray = [...array];

  sortedArray.sort((a, b) => {
    const aValue = a[key];
    const bValue = b[key];

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      if (aValue === bValue) {
        return 0;
      }
      return direction === 'asc' ? aValue - bValue : bValue - aValue;
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      direction = 'asc' // overwrite if string to asc
      return direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    }

    return 0;
  });

  return sortedArray;
}