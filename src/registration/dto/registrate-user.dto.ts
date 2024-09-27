import { ApiProperty } from '@nestjs/swagger'
import { IsDate, IsEmail, IsNotEmpty, MinLength } from 'class-validator'
import { Doing } from 'src/doing/entities/doing.entity'

export class RegistrateUserDto {
	@IsNotEmpty()
	name: string

	@IsEmail({ allow_display_name: true }, { message: 'is not email' })
	email: string

	// date of birth
	@IsDate()
	dob: Date

	@IsNotEmpty()
	find_event: string

	@IsNotEmpty()
	doing: Doing
}
