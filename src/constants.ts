export const siteTitle = "keri.is";

export function chunksOf<T>(array: T[], chunkSize: number): T[][] {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

export function partition<T>(p: (x: T) => boolean, xs: T[]): [T[], T[]] {
  const ys: T[] = [];
  const zs: T[] = [];
  for (const x of xs) {
    if (p(x)) {
      ys.push(x);
    } else {
      zs.push(x);
    }
  }
  return [ys, zs];
}

export function zipWith<X, Y, Z>(f: (x: X, y: Y) => Z, xs: X[], ys: Y[]): Z[] {
  const zs: Z[] = [];
  xs.forEach((x, i) => {
    if (i < ys.length) {
      const y = ys[i];
      zs.push(f(x, y));
    }
  });
  return zs;
}

export function spliceAll<T>(xs: T[], ys: [number, T][]) {
  for (const [i, y] of ys) {
    xs.splice(i, 0, y);
  }
  return xs;
}
