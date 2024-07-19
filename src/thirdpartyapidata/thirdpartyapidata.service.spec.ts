import { Test, TestingModule } from '@nestjs/testing';
import { ThirdpartyapidataService } from './thirdpartyapidata.service';

describe('ThirdpartyapidataService', () => {
  let service: ThirdpartyapidataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThirdpartyapidataService],
    }).compile();

    service = module.get<ThirdpartyapidataService>(ThirdpartyapidataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
