import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ThirdpartyapidataModule } from './thirdpartyapidata/thirdpartyapidata.module';

@Module({
  imports: [HttpModule, ThirdpartyapidataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
