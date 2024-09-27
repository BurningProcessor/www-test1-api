import { IsDate, IsNotEmpty, IsOptional } from 'class-validator'

export class CreateDoingDto {
	@IsNotEmpty()
	title: string

	@IsOptional()
	desc?: string

	@IsDate()
	date: Date

	@IsNotEmpty()
	organizer: string
}
