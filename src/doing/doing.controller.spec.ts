import { Test, TestingModule } from '@nestjs/testing';
import { DoingController } from './doing.controller';
import { DoingService } from './doing.service';

describe('DoingController', () => {
  let controller: DoingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoingController],
      providers: [DoingService],
    }).compile();

    controller = module.get<DoingController>(DoingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
