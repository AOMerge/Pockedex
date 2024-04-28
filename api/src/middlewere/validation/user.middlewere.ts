// Date: 19/12/2023
// user.middlewere.ts
// library
import {
  IsString,
  Length,
  IsEmail,
  IsNotEmpty,
  IsEmpty,
  isEmpty,
  IsNotIn
} from "class-validator";
import { IsNull } from "sequelize-typescript";
const valIsNotIn = [
  "DROP",
  "SELECT",
  "INSERT",
  "DELETE",
  "UPDATE",
  "--",
  ";",
  "/*",
  "*/",
  "=",
  "(*",
  "*)",
  "{",
  "}",
  "(",
  ")",
  "[",
  "]",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "+",
  "=",
  "|",
  "\\",
  ":",
  '"',
  "'",
  "<",
  ">",
  "?",
  ",",
  ".",
  "/",
  "~",
  "`",
  " ",
];


/**
 * Data transfer object for user information.
 * 
 * @firstName : string
 * @lastName  : string
 * @email     : string
 * @password  : string
 * 
 */
export class UserDto {
  /**
   * The first name of the user.
   */
  @IsString()
  @IsNotEmpty()
  firstName?: string;

  /**
   * The last name of the user.
   */
  @IsString()
  @Length(4, 20)
  @IsNotEmpty()
  lastName?: string;

  /**
   * The email address of the user.
   */
  @IsString()
  @IsEmail()
  email?: string;

  /**
   * The password of the user.
   */
  @IsString()
  @Length(4, 20)
  password?: string;
}

/**
 * Data transfer object for user's first name validation.
 */
export class userFirstNameDto {
  @IsString()
  @Length(4, 20)
  @IsNotIn(valIsNotIn)
  firstName?: string;
}

/**
 * Data transfer object for user last name validation.
 */
export class userLastNameDto {
  /**
   * Last name of the user.
   * @type {string}
   * @length {4} Minimum length of 4 characters.
   * @length {20} Maximum length of 20 characters.
   * @isNotIn {valIsNotIn} Value should not be in the provided array.
   */
  @IsString()
  @Length(4, 20)
  @IsNotIn(valIsNotIn)
  lastName?: string;
}

/**
 * Data transfer object for user's username validation.
 */
export class userUserNameDto {
  @IsString()
  @Length(4, 20)
  @IsNotIn(valIsNotIn)
  userName?: string;
}

/**
 * Represents a TokenDto object used for validation.
 */
export class tokenDto {
  /**
   * The token string.
   */
  @IsString()
  @Length(4, 80)
  @IsNotIn(valIsNotIn)
  token?: string;
}

/**
 * Represents the deleteDto class used for validation.
 * @class
 * @property {string} id - The id of the user.
 */
export class deleteDto {
  @IsString()
  id?: string;
}

/**
 * Represents a login data transfer object.
 */
export class loginDto {
  /**
   * The email of the user.
   */
  @IsEmail()
  @IsNotEmpty()
  email?: string;

  /**
   * The password of the user.
   */
  @IsString()
  @Length(4, 20)
  @IsNotEmpty()
  password?: string;
}

/**
 * Data transfer object for checking email.
 */
export class checkEmailDto {
  /**
   * Token for email verification.
   */
  @IsString()
  @IsNotEmpty()
  token?: string;
}

/**
 * Data transfer object for resetting password.
 */
export class resetPasswordDto {
  /**
   * The new password.
   */
  @IsString()
  @Length(4, 20)
  @IsNotEmpty()
  password?: string;

  /**
   * The token used for password reset.
   */
  @IsString()
  @Length(4, 20)
  @IsNotEmpty()
  token?: string;
}

/**
 * Data transfer object for checking password.
*/
export class checkpassDto {
  @IsString()
  token?: string 
}

