import { Module } from '@nestjs/common'
import { UsersModel } from './users.model'
import { UsersService } from './users.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { UsersController } from './users.controller'

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        SequelizeModule.forFeature([
            UsersModel
        ])
    ]
})
export class UsersModule {}
