import { Body, Controller, Get, Post, Query, Search } from '@nestjs/common'
import { RegistrateUserDto } from './dto/registrate-user.dto'
import { RegistrationService } from './registration.service'

@Controller('registration')
export class RegistrationController {
	constructor(private readonly registrationService: RegistrationService) {}

	@Post()
	create(@Body() registrateUserDto: RegistrateUserDto) {
		return this.registrationService.registrate(registrateUserDto)
	}

	@Get()
	findByDoing(
		@Query('doing') doing: number,
		@Query('name') name?: string,
		@Query('email') email?: string,
	) {
		return this.registrationService.findByDoing(doing, name, email)
	}
}
