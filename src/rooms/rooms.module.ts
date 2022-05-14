import { Module } from '@nestjs/common'
import { RoomsModel } from './rooms.model'
import { RoomsService } from './rooms.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { RoomsController } from './rooms.controller'


@Module({
    controllers: [RoomsController],
    providers: [RoomsService],
    imports: [
        SequelizeModule.forFeature([
            RoomsModel
        ])
    ]
})
export class RoomsModule {}
