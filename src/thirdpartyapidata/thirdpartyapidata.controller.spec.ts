import { Test, TestingModule } from '@nestjs/testing';
import { ThirdpartyapidataController } from './thirdpartyapidata.controller';

describe('ThirdpartyapidataController', () => {
  let controller: ThirdpartyapidataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThirdpartyapidataController],
    }).compile();

    controller = module.get<ThirdpartyapidataController>(ThirdpartyapidataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
