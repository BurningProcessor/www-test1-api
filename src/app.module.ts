import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { RegistrationModule } from './registration/registration.module'
import { DoingModule } from './doing/doing.module'
import { Doing } from './doing/entities/doing.entity'
import { Registration } from './registration/entities/registration.entity'

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: ['.env.dev', '.env'],
			isGlobal: true,
		}),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (configService: ConfigService) => ({
				type: 'postgres',
				host: configService.get('DB_HOST'),
				port: configService.get('DB_PORT'),
				username: configService.get('DB_USERNAME'),
				password: configService.get('DB_PASSWORD'),
				database: configService.get('DB_NAME'),
				synchronize: true,
				entities: [__dirname + '/**/*.entity{.js, .ts}'],
			}),
			inject: [ConfigService],
		}),
		RegistrationModule,
		DoingModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
