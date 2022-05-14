import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { UsersModel } from './users/users.model'
import { SequelizeModule } from '@nestjs/sequelize'
import { UsersModule } from './users/users.module'
import { RoomsModule } from './rooms/rooms.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: process.env.MYSQL_HOST,
            port: Number(process.env.MYSQL_PORT),
            username: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DB,
            models: [
                UsersModel
            ],
            autoLoadModels: true
        }),
        UsersModule,
        RoomsModule,
    ]
})
export class AppModule {

}