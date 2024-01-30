import { Module } from '@nestjs/common';
import { InitCommand } from './initialize-command';
import { ReactQuestions } from './framework/React/react.questions';
import { FrameworkQuestions } from './framework/framework.questions';
import { PackageManagerQuestions } from './package-manager/package-manager.questions';

@Module({
  providers: [
    FrameworkQuestions,
    PackageManagerQuestions,
    ReactQuestions,
    InitCommand,
  ],
})
export class AppModule {}
