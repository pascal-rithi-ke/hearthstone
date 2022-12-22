import { NextFunction } from "connect";
import { Connect, Query } from "../config/mysql";
import express, {Request, Response} from 'express';

const NAMESPACE = "cards";

const getCards = (req: Request, res: Response, next: NextFunction) =>{
    let query = "Select * from cards";

    Connect()
    .then(connection =>{
        Query(connection, query)
        .then(results =>{
            return res.status(200).json({
                results
            });
        })
        .catch(error =>{
            return res.status(500).json({
                message: error.message,
                error
            });
        })
        .finally(() =>{
            connection.end();
        });
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message,
            error
        });
    })
};

export default {getCards};