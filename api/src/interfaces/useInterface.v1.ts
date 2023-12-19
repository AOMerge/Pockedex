// creamos una interface para definir el tipo de dato que vamos a recibir
export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IDataUser{
    id: number;
    email: string;
    phone: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IUpdateUser{
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    token: string;
}