import { Table, Column, Model, DataType } from "sequelize-typescript";
import { IDataUser } from "../src/interfaces/useInterface.v1";

@Table({
  tableName: "Likes",
  modelName: "Likes",
  timestamps: true,
})
export class Likes extends Model<Likes> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  public id?: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  public id_Pockemon!: number;

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
