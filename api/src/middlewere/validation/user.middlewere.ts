import {
  IsString,
  Length,
  IsEmail,
  IsNotEmpty,
} from "class-validator";


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
 * Data transfer object for updating user information.
 * 
 * @firstName : string
 * @lastName  : string
 * @userName  : string
 */
export class UserUpdateDto {
  /**
   * The first name of the user.
   */
  @IsString()
  firstName?: string;

  /**
   * The last name of the user.
   * Must be a string with a length between 4 and 20 characters.
   */
  @IsString()
  @Length(4, 20)  
  lastName?: string;
  
  /**
   * The username of the user.
   * Must be a string with a length between 4 and 20 characters.
   */
  @IsString()
  @Length(4, 20)
  UserName?: string;

  /**
   * the token of the user.
   * Must be a string with a length between 4 and 80 characters.
   */
  @IsString()
  @Length(4, 80)
  @IsNotEmpty()
  token?: string;
}

/**
 * Represents the deleteDto class used for validation.
 */
export class deleteDto {
  @IsString()
  id?: string;
}

/**
 * Data transfer object for updating and saving user information.
 */
export class updateSaveDto {
  /**
   * The ID of the user.
   * @type {string}
   * @memberof updateSaveDto
   */
  @IsString()
  @Length(4, 20)
  id?: string;

  /**
   * The title of the user.
   * @type {string}
   * @memberof updateSaveDto
   */
  @IsString()
  @Length(4, 20)
  title?: string;
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