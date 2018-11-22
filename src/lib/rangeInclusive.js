export function inRange(n, start, end) {
  return (start <= n && n <= end) || (end <= n && n <= start);
}

export default function rangeInclusive(start, end, step = 1) {
  const arr = [];

  // check to see if this can complete, if not return empty arry
  const isIncreasing = Math.abs(step) === step;
  const canComplete =
    (isIncreasing && start <= end) || (!isIncreasing && end <= start);

  if (!canComplete) return arr;

  for (let i = start; inRange(i, start, end); i += step) {
    arr.push(i);
  }

  return arr;
}
