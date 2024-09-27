import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Doing } from './entities/doing.entity'
import { CreateDoingDto } from './dto/create-doing.dto'
import { UpdateDoingDto } from './dto/update-doing.dto'

@Injectable()
export class DoingService {
	constructor(
		@InjectRepository(Doing)
		private readonly doingRepository: Repository<Doing>,
	) {}

	async create(createDoingDto: CreateDoingDto) {
		return await this.doingRepository.save({
			title: createDoingDto.title,
			desc: createDoingDto.desc,
			date: createDoingDto.date,
			organizer: createDoingDto.organizer,
		})
	}

	async findAll() {
		return this.doingRepository.find()
	}

	findOne(id: number) {
		return this.doingRepository.findOne({ where: { id }, relations: { registers: true } })
	}

	update(id: number, updateDoingDto: UpdateDoingDto) {
		return `This action updates a #${id} doing`
	}

	remove(id: number) {
		return `This action removes a #${id} doing`
	}
}
