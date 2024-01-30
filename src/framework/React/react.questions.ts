import { ChoicesFor, Question, QuestionSet } from 'nest-commander';
import { BundlerOption, bundlers } from '~/bundler/bundlers';

@QuestionSet({ name: 'react-questions' })
export class ReactQuestions {
  @Question({
    message: 'Which bundler would you like to use?',
    name: 'bundler',
    type: 'list',
    default: BundlerOption.Vite,
  })
  parseBundler(bundler: string) {
    return bundler;
  }

  @ChoicesFor({ name: 'bundler' })
  bundlerChoices() {
    return bundlers;
  }
}
