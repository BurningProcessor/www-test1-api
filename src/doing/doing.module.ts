import { Module } from '@nestjs/common'
import { DoingService } from './doing.service'
import { DoingController } from './doing.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Doing } from './entities/doing.entity'

@Module({
	imports: [TypeOrmModule.forFeature([Doing])],
	controllers: [DoingController],
	providers: [DoingService],
})
export class DoingModule {}
