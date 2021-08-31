import { IVideosService } from '../interfaces/IVideosService'
import { Result } from '../infra/result'
import { Videos } from '../models/videos'
import { VideosRepository } from '../repository/videosRepository'

export class VideosService implements IVideosService {
  
  /**
   * @summary Obter video por id
   * @param {string} _id Id object
   * @returns Json
   */
  async get(_id: string): Promise<Videos> {
    const result = new Result<Videos>()
    result.Data = await VideosRepository.findById(_id)
    return result.Data
  }

    /**
   * @summary Listar os videos com paginação
   * @param {number} page Numero da paginação
   * @param {number} qtd  Limite de registros por pesquisa
   * @returns Json
   */
  async getAll(page: number, qtd: number): Promise<Result<Videos>> {
    let result = new Result<Videos>()
    result.Page = page
    result.Qtd = qtd
    result.Total = await VideosRepository.count({})
    result.Data = await VideosRepository.find({})
      .skip(page * qtd - qtd)
      .limit(qtd)
    return result
  }
}
