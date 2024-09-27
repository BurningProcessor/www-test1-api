import { Test, TestingModule } from '@nestjs/testing';
import { DoingService } from './doing.service';

describe('DoingService', () => {
  let service: DoingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoingService],
    }).compile();

    service = module.get<DoingService>(DoingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
