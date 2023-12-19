import {
  Table,
  Column,
  Model,
  HasMany,
  HasOne,
  DataType,
} from "sequelize-typescript";
import { IUser, IDataUser } from "../src/interfaces/useInterface.v1";
import { DataUser } from "./dataUser.model";

@Table({
  tableName: "Users",
  modelName: "User",
  timestamps: true,
})
export class User extends Model<User> {
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
  public firstName!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public lastName!: string | null;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public username!: string;
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

  @HasOne(() => DataUser, {
    foreignKey: "id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  public dataUser?: IDataUser;

  @Column
  public dataUserId?: number ;
}
