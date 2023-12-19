import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import { SavesLikes} from "./saveLike.model"
import { User } from "./user.model";

@Table({
  tableName: "Saves",
  modelName: "Saves",
  timestamps: true,
})
export class Saves extends Model<Saves> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  public id?: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public title!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public description!: string;

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

  @HasMany(() => SavesLikes, {
    foreignKey: "id",
    as: "SavesLikes",
  })
  public savesLike?: SavesLikes[];
  
  @HasMany(() => User, {
    foreignKey: "id",
    as: "user",
  })
  public user?: User[];
}
