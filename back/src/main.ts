import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('gestionnaire de reclamation (SAV)')
    .setDescription('DESCRIPTION **//**') 
    .setVersion('1.0')
    .addApiKey({type:'apiKey',name:'Authorization',in:'header'},'apiKey')
    .addTag('SFECTORIA')
    .build();
   
    
  const doc = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, doc);
  app.enableCors();


  app.useStaticAssets('upload',{prefix:'/upload'})

  await app.listen(4000);
}
bootstrap();


