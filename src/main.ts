import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const PORT = 3002;
/*const express=require('express');
const cors=require('cors');

const app =express();

app.use(cors());
app.get('/product',function(req,res,next){res.json({msg:'this is cors'});
const PORT=3456;
app.listen(PORT,function(){console.log('cors enables webserver$(PORT)');})
});*/
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  console.log('appserviceport',PORT);
  
}
bootstrap();
