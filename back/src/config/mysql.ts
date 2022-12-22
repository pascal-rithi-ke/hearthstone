import { rejects } from 'assert';
import mysql from 'mysql';
import { resolve } from 'path';
import config from './db';

const params = {
    user: config.mysql.user,
    passwd: config.mysql.passwd,
    host: config.mysql.host,
    db: config.mysql.db
}

const Connect = async() => new Promise<mysql.Connection>((resolve, rejects) =>{
    const connection = mysql.createConnection(params);

    connection.connect((error)=>{
        if (error){
            rejects(error);
            return;
        }
        resolve(connection);
    });
});

const Query = async(connection: mysql.Connection, query: string) => new Promise((resolve, reject) =>{
    connection.query(query, connection, (error, result)=>{
        if(error){
            reject(error);
            return;
        }

        resolve(result);

    });
});

export {Connect, Query};