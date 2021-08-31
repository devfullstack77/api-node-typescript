import 'reflect-metadata'
import { container } from 'tsyringe'
import { GaleriaService } from '../services/galeriaService'
import {  NoticiasService } from '../services/noticiasService'
import { VideosService } from '../services/videosService'

container.register('INoticiasService', {
  useClass:NoticiasService ,
})

container.register('IVideosService', {
  useClass: VideosService,
})

container.register('IGaleriaService', {
  useClass: GaleriaService,
})
