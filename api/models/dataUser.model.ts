// Date: 15/12/23
// user.model.ts
import { Table, Column, Model, DataType } from "sequelize-typescript";
import { IDataUser } from "../src/interfaces/useInterface.v1";

@Table({
  tableName: "DataUsers",
  modelName: "DataUsers",
  timestamps: true,
})
export class DataUser extends Model<DataUser> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  public id?: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    //unique: true,
  })
  public email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public password!: string;

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
}
