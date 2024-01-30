import { Command, CommandRunner, InquirerService } from 'nest-commander';
import { Framework } from './framework/framework';

@Command({
  name: 'init',
  description: 'Initialize new project',
  options: { isDefault: true },
})
export class InitCommand extends CommandRunner {
  constructor(private readonly inquirer: InquirerService) {
    super();
  }

  async run() {
    const { framework } = await this.inquirer.ask<{ framework: string }>(
      'framework-questions',
      undefined,
    );
    const frameworkModule: { new (inquirer: InquirerService): Framework } = (
      await import(`./framework/${framework}`)
    ).default;
    new frameworkModule(this.inquirer).create();
  }
}
