import 'reflect-metadata'
import './src/shared/container'

import database from './src/infra/database'
import express, { Application, Request, Response } from 'express'

import noticiasRouter from './src/router/noticiasRouter'
import videosRouter from './src/router/videosRouter'
import galeriaRouter from './/src/router/galeriaRouter'

class Server {
  constructor() {
    this.app = express()
    this._db.createConnection()
    this.routes()
  }

  public app: Application
  private _db: database = new database()

  routes() {
    // Route Health Check
    this.app.route('/').get((req, res) => {
      res.send({ versao: '0.0.3' })
    })

    this.app.use('/', noticiasRouter)
    this.app.use('/', galeriaRouter)
    this.app.use('/', videosRouter)
  }
}

export default new Server()
