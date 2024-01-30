import { ChoicesFor, Question, QuestionSet } from 'nest-commander';
import { FrameworkOption, frameworks } from './frameworks';

@QuestionSet({ name: 'framework-questions' })
export class FrameworkQuestions {
  @Question({
    message: 'Which Framework would you like to use?',
    name: 'framework',
    type: 'list',
    default: FrameworkOption.React,
  })
  parseFramework(framework: string) {
    return framework;
  }

  @ChoicesFor({ name: 'framework' })
  reactChoices() {
    return frameworks;
  }
}
