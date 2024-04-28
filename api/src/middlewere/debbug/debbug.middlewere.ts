// - Date: 19/12/2023
// debbug.middlewere.ts
import { Response } from "express";
import { ValidationError } from "class-validator";

/**
 * Middleware for debugging purposes.
 */
export class debugMiddleware {
  constructor() {}

  /**
   * Logs the provided debbug information to the console.
   *
   * @param debbug - The debbug information to be logged.
   */
  static debbug(debbug: any) {
    return console.log("debbug", debbug ? debbug : "test");
  }

  /**
   * Checks if the given condition is truthy. If the condition is truthy, throws an error with the specified error message.
   * @param condition - The condition to check.
   * @param errorMessage - The error message to throw if the condition is truthy.
   * @returns A Promise that resolves to void.
   */
  static async ifError(
    condition: any,
    errorMessage: string | ValidationError[] | any
  ): Promise<void> {
    if (condition) {
      throw new Error(errorMessage);
    }
  }

  /**
   * Throws a test error.
   * @throws {Error} Test error.
   */
  static async testError() {
    throw new Error("Test error");
  }

  /**
   * Sends a response with the specified status code and message.
   * @param res - The response object.
   * @param statusCode - The status code of the response.
   * @param message - The message of the response.
   * @returns A Promise that resolves to void.
   */
  static async sendResponse(
    res: Response,
    statusCode: number,
    message: string | ValidationError[] | any
  ): Promise<Response<any>> {
    return res.status(statusCode).json({
      status: statusCode,
      message: message,
    });
  }
}
