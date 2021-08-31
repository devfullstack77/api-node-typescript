/*galeriaService.ts*/
import { IGaleriaService } from '../interfaces/IGaleriaService'
import { Result } from '../infra/result'
import { Galeria } from '../models/galeria'
import { GaleriaRepository } from '../repository/galeriaRepository'

export class GaleriaService implements IGaleriaService {

   /**
   * @summary Obter por id
   * @param {string} _id Id object
   * @returns Json
   */
  async get(_id: string): Promise<Galeria> {
    const result = new Result<Galeria>()
    result.Data = await GaleriaRepository.findById(_id)
    return result.Data
  }
   /**
   * @summary Listar dados da galeria com paginação
   * @param {number} page Numero da paginação
   * @param {number} qtd  Limite de registros por pesquisa
   * @returns Json
   */
  async getAll(page: number, qtd: number): Promise<Result<Galeria>> {
    let result = new Result<Galeria>()
    result.Page = page
    result.Qtd = qtd
    result.Total = await GaleriaRepository.count({})
    result.Data = await GaleriaRepository.find({})
      .skip(page * qtd - qtd)
      .limit(qtd)
    return result
  }
}
