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
  const n = Math.min(xs.length, ys.length);
  for (var i = 0; i < n; i++) {
    zs.push(f(xs[i], ys[i]));
  }
  return zs;
}

export function zipWithLongest<X, Y, Z>(f: (x?: X, y?: Y) => Z, xs: X[], ys: Y[]): Z[] {
  const zs: Z[] = [];
  const n = Math.max(xs.length, ys.length);
  for (var i = 0; i < n; i++) {
    zs.push(f(xs.at(i), ys.at(i)));
  }
  return zs;
}

export function spliceAll<T>(xs: T[], ys: [number, T][]) {
  for (const [i, y] of ys) {
    xs.splice(i, 0, y);
  }
  return xs;
}
