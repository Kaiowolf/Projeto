const server = require('./config/server.js')
const db = require('./config/db')
const routes = require('./config/routes')

routes(server)