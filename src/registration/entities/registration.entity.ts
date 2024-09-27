import {
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

import { Doing } from 'src/doing/entities/doing.entity'

@Entity()
export class Registration {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column()
	email: string

	@Column()
	dob: Date

	@Column()
	find_event: string

	@ManyToOne(() => Doing, (doing) => doing.id)
	doing: Doing

	@CreateDateColumn()
	createAt: Date

	@UpdateDateColumn()
	updateAt: Date
}
