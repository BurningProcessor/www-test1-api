import { Body, Controller, Post } from '@nestjs/common'
import { RegistrateUserDto } from './dto/registrate-user.dto'
import { RegistrationService } from './registration.service'

@Controller('registration')
export class RegistrationController {
	constructor(private readonly registrationService: RegistrationService) {}

	@Post()
	create(@Body() registrateUserDto: RegistrateUserDto) {
		return this.registrationService.registrate(registrateUserDto)
	}
}
