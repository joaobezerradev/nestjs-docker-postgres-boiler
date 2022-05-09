import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'app_postgres',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'database',
      entities: [join(__dirname, '/../**/*.entity.{js,ts}')],
      synchronize: false,
      logging: true

    })
  ]
})
export class AppModule { }
