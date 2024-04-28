import { Request, Response, NextFunction } from 'express';


/**
 * Middleware function to handle errors.
 * 
 * @param error - The error object.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next function.
 */
export default function errorMiddleware(error: any, req: Request, res: Response, next: NextFunction) {
    if (res.headersSent) {
        return next(error);
    }
    res.status(500).json({ error: error.toString() });
}

