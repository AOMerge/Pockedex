// - Date: 15/12/2023
// debbug.middlewere.ts
import { Response } from "express";
import { ValidationError } from "class-validator";

/**
 * Middleware for debugging purposes.
 */
export class debbugMiddlewere {
    constructor() {}

    /**
     * Logs the provided debbug information to the console.
     * 
     * @param debbug - The debbug information to be logged.
     */
    public debbug(debbug: any) {
       return console.log(debbug);
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
}
