import { ValidationError, validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { Response, Request, NextFunction } from "express";
import { debugMiddleware } from "../debbug/debbug.middlewere";


/**
 * Middleware class for validation.
 */
export class validationMiddlewere {
  /**
   * Validates the request object against the provided class.
   * @param ClassValidate - The class to validate against.
   * @param param - The request object to validate.
   * @returns A promise that resolves to an array of validation errors or a response object.
   */
  static async error(
    ClassValidate: any,
    param: Request
  ): Promise<ValidationError[] | any> {
    const useValidate: object = plainToClass(ClassValidate, param);
    const errors = await validate(useValidate);

    return errors;
  }

  static async ifErrorNext(
    req: Request, // Add the request object to pass to next()
    res: Response,
    next: NextFunction, // Add next function to pass control
    errorMessage: string | ValidationError[] | any
  ): Promise<void> {
    // Changed return type to Promise<void> as it doesn't return any value
    if (errorMessage && errorMessage.length > 0) {
      await debugMiddleware.sendResponse(res, 400, errorMessage);
    } else {
      next(); // Pass control if there's no error
    }
  }  
}
