import { InquirerService } from 'nest-commander';
import { Framework } from '../framework';

export default class React extends Framework {
  constructor(inquirer: InquirerService) {
    super(inquirer);
  }

  async create(): Promise<void> {
    await this.chooseBundler();
  }

  async chooseBundler() {
    const { packageManager } = await this.inquirer.ask<{
      packageManager: string;
    }>('package-manager-questions', undefined);
    const { bundler } = await this.inquirer.ask<{
      bundler: string;
    }>('react-questions', undefined);
    console.log(packageManager, bundler);
  }
}
