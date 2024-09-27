import { Registration } from 'src/registration/entities/registration.entity'
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryColumn,
	PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class Doing {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	title: string

	@Column({ nullable: true })
	desc?: string

	@Column()
	date: Date

	@Column()
	organizer: string

	@OneToMany(() => Registration, (registration) => registration.doing, { onDelete: 'CASCADE' })
	registers: Registration[]

	@CreateDateColumn()
	createAt: Date

	@CreateDateColumn()
	updateAt: Date
}
