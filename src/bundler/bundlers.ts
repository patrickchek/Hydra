export enum BundlerOption {
  Vite = 'vite',
  Webpack = 'webpack',
  EsBuild = 'esbuild',
}

export const bundlers = Object.values(BundlerOption);
