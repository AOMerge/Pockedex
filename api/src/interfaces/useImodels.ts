export interface ILike {
  id: number;
  id_pockemon: number;
  createAt: Date;
  UpdateAt: Date;
}
// save Interface
export interface ISave {
  id: number;
  title: string;
  descrption: string;
  createAt: Date;
  UpdateAt: Date;
  like: ILike;
  user: IUser;
}


// user Interface

/**
 * Represents a user.
 * @interface
 * @property {number} id - The id of the user.
 * @property {string} firstName - The first name of the user.
 * @property {string} lastName - The last name of the user.
 * @property {string} userName - The username of the user.
 * @property {string} email - The email of the user.
 * @property {number} phone - The phone of the user.
 * @property {string} password - The password of the user.
 */
export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phone: number;
  password: string;
}
export interface ICreateUser {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phone: number;
  password: string;
}
/**
 * Represents an interface for updating a user.
 * @interface
 * @extends {IUser} - the this interface extends the IUser interface.
 * @property {string} token - The token of the user.
 */
export interface IUpdateUser extends IUser {
  token: string;
}
export interface IDataUser {
  id: number;
  email: string;
  phone: number;
  password: string;
  createAt: Date;
  updateAt: Date;
}
export interface IToken {
  id: number;
  token: string;
  createAt: Date;
  updateAt: Date;
}
export interface ITokenUser {
  id: number;
  token: string;
  user: IUser;
}
export interface ILogin {
  email: string;
  password: string;
}

export interface IcheckEmail {
  token: string;
}
export interface IdelateCheckUser {
  token: string;
}
export interface IdelateUser{
  id: string
}

