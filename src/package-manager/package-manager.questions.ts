import { ChoicesFor, Question, QuestionSet } from 'nest-commander';
import {
  PackageManagerOption,
  packageManagers,
} from '~/package-manager/package-managers';

@QuestionSet({ name: 'package-manager-questions' })
export class PackageManagerQuestions {
  @Question({
    message: 'Which package manager do you prefer?',
    name: 'packageManager',
    type: 'list',
    default: PackageManagerOption.Npm,
  })
  parsePackageManager(packageManager: string) {
    return packageManager;
  }

  @ChoicesFor({ name: 'packageManager' })
  packageManagerChoices() {
    return packageManagers;
  }
}
