import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Like, Repository } from 'typeorm'
import { Registration } from './entities/registration.entity'
import { RegistrateUserDto } from './dto/registrate-user.dto'

@Injectable()
export class RegistrationService {
	constructor(
		@InjectRepository(Registration)
		private readonly registrationRepository: Repository<Registration>,
	) {}

	async registrate(registrateUserDto: RegistrateUserDto): Promise<RegistrateUserDto> {
		const user = await this.registrationRepository.save({
			name: registrateUserDto.name,
			email: registrateUserDto.email,
			dob: registrateUserDto.dob,
			find_event: registrateUserDto.find_event,
			doing: registrateUserDto.doing,
		})

		return user
	}

	async findByDoing(doingId: number, name?, email?) {
		return await this.registrationRepository.findBy({
			doing: { id: doingId },
			name: name ? Like(`%${name}%`) : null,
			email: email ? Like(`%${email}%`) : null,
		})
	}
}
