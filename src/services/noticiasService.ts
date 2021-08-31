import { INoticiasService } from '../interfaces/INoticiasService'
import { Result } from '../infra/result'
import { Noticias } from '../models/noticias'
import { NoticiasRepository } from '../repository/noticiasRepository'

export class NoticiasService implements INoticiasService {
  /**
   * @summary Obter noticia por id
   * @param {string} _id Id object
   * @returns Json
   */
  async get(_id: string): Promise<Noticias> {
    const result = new Result<Noticias>()
    result.Data = await NoticiasRepository.findById(_id)
    return result.Data
  }

  /**
   * @summary Listar as noticias com paginação
   * @param {number} page Numero da paginação
   * @param {number} qtd  Limite de registros por pesquisa
   * @returns Json
   */
  async getAll(page: number, qtd: number): Promise<Result<Noticias>> {
    const result = new Result<Noticias>()
    result.Page = page
    result.Qtd = qtd
    result.Total = await NoticiasRepository.count({})

    result.Data = await NoticiasRepository.find({})
      .skip(page * qtd - qtd)
      .limit(qtd)

    return result
  }
}
