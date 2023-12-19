import { Table , Column
, Model, DataType, HasMany, HasOne } from "sequelize-typescript";
import { Likes } from "./likes.model";
import { Saves } from "./save.model";

@Table({
  tableName: "SavesLikes",
  modelName: "SavesLikes",
  timestamps: true,
})
export class SavesLikes extends Model<SavesLikes> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    public id?: number;
    
    @Column({
        allowNull: false,
        type: DataType.DATE,
        defaultValue: DataType.NOW,
        field: "create_at",
    })
    createdAt!: Date;
    @Column({
        allowNull: false,
        type: DataType.DATE,
        defaultValue: DataType.NOW,
        field: "update_at",
    })
    updatedAt!: Date;
    
    @HasMany(() => Likes, {
        foreignKey: "id",
        as: "likes",
    })
    public likes?: Likes[];
    @HasMany(() => Saves, {
        foreignKey: "id",
        as: "saves",
    })
    public saves?: Saves[];
}