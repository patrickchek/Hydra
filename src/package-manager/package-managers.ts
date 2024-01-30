export enum PackageManagerOption {
  Npm = 'npm',
  Yarn = 'yarn',
  Pnpm = 'pnpm',
  Bun = 'bun',
}

export const packageManagers = Object.values(PackageManagerOption);
