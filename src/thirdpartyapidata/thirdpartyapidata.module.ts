import { Module } from '@nestjs/common';
import { ThirdpartyapidataController } from './thirdpartyapidata.controller';
import { ThirdpartyapidataService } from './thirdpartyapidata.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ThirdpartyapidataController],
  providers: [ThirdpartyapidataService]
})
export class ThirdpartyapidataModule { }
