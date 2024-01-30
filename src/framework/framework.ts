import { InquirerService } from 'nest-commander';

export abstract class Framework {
  constructor(public readonly inquirer: InquirerService) {}

  abstract create(): void;
}
