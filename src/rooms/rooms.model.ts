import { Column, DataType, Table, Model } from 'sequelize-typescript'

interface RoomCreationAttrs {
    title: string,
    description: string
}

@Table({
    tableName: 'rooms'
})
export class RoomsModel extends Model<RoomsModel, RoomCreationAttrs> {

    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    title: string

    @Column({
        type: DataType.TEXT,
        unique: true,
        allowNull: false
    })
    description: string

    @Column({
        type: DataType.INTEGER,
        unique: true,
        allowNull: false
    })
    sort: number

    @Column({
        type: DataType.BOOLEAN,
        unique: true,
        allowNull: false
    })
    active: boolean
}