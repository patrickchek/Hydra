import { CommandFactory } from 'nest-commander';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(`
                  _           
  /\\  /\\_   _  __| |_ __ __ _ 
 / /_/ / | | |/ _\` | '__/ _\` |
/ __  /| |_| | (_| | | | (_| |
\\/ /_/  \\__, |\\__,_|_|  \\__,_|
        |___/                 `);
  await CommandFactory.run(AppModule, ['warn', 'error']);
}
bootstrap();
