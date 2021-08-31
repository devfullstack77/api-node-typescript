import 'reflect-metadata'
import express, { Request, Response } from 'express'
import { container } from 'tsyringe'
import { VideosController } from '../controller/videosController'

const videosRouter = express()
const videos = container.resolve(VideosController)

videosRouter
  .route('/api/videos/:page/:qtd')
  .get((req: Request, res: Response) => {
    return videos.get(req, res)
  })

videosRouter.route('/api/videos/:id').get((req: Request, res: Response) => {
  return videos.getById(req, res)
})

export default videosRouter
