const { config } = require('dotenv');

config()

module.exports = {
    PORT: process.env.PORT || 3000,
    DB_USER: process.env.DB_USER || 'postgres',
    DB_PASSWORD: process.env.DB_PASSWORD || 'Hellen2012',
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_DATABASE: process.env.DB_DATABASE ||'likeme',
    DB_PORT: process.env.DB_PORT || 5432
}