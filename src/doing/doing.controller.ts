import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { DoingService } from './doing.service'
import { CreateDoingDto } from './dto/create-doing.dto'
import { UpdateDoingDto } from './dto/update-doing.dto'

@Controller('doing')
export class DoingController {
	constructor(private readonly doingService: DoingService) {}

	@Post()
	create(@Body() createDoingDto: CreateDoingDto) {
		return this.doingService.create(createDoingDto)
	}

	@Get()
	findAll(@Query('sort') sort?: string) {
		return this.doingService.findAll(sort)
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.doingService.findOne(+id)
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateDoingDto: UpdateDoingDto) {
		return this.doingService.update(+id, updateDoingDto)
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.doingService.remove(+id)
	}
}
