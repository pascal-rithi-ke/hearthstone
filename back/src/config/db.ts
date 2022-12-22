import dotenv from "dotenv";

dotenv.config();

const MYSQL_HOST = process.env.MYSQL_HOST || 'mysql21';
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'projethearthstone_1';
const MYSQL_USER = process.env.MYSQL_USER || '293674@2a00:b6e0:1:210:1::1';
const MYSQL_PASSWRD = process.env.MYSQL_PASSWRD ||  'pi7GWtyqhUYiwb8_hearthStone';

const MYSQL = {
    host: MYSQL_HOST,
    db: MYSQL_DATABASE,
    user: MYSQL_USER,
    passwd: MYSQL_PASSWRD
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'mysql21';
const SERVER_PORT = process.env.SERVER_PORT || 3306;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    mysql: MYSQL,
    server: SERVER
}
export default config;