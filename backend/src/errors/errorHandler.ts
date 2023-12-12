import {Request, Response, NextFunction} from 'express';
import { AppError } from './AppError';

export function errorHandler(Error: Error, Request: Request, Response: Response, Next: NextFunction){
    if(Error instanceof AppError){
        return Request.status(Error.status).json({message: Error.message});
    }

    return Request.status(500).json({message: "Internal server error."})
}