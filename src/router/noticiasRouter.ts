import 'reflect-metadata'
import express, { Request, Response } from 'express'
import { container } from 'tsyringe'
import { NoticiasController } from '../controller/noticiasController'

const noticiasRouter = express()
const noticia = container.resolve(NoticiasController)

noticiasRouter
  .route('/api/noticias/:page/:qtd')
  .get((req: Request, res: Response) => {
    return noticia.get(req, res)
  })

  noticiasRouter.route('/api/noticias/:id').get((req: Request, res: Response) => {
  return noticia.getById(req, res)
})

export default noticiasRouter
