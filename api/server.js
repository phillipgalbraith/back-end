const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const authRouter = require('./auth/auth-router')
const itemsRouter = require('./items/items-router')

const foodsRouter = require('./foods/foods-router')
const meetingsRouter = require('./meetings/meetings-router')
const reservationsRouter = require('./reservations/reservations-router')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use("/api/auth", authRouter);
server.use("/api/items", itemsRouter)
server.use("/api/foods", foodsRouter);
server.use("/api/meetings", meetingsRouter)
server.use("/api/reservations", reservationsRouter);

server.use((err, req, res, next) => { //eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server
