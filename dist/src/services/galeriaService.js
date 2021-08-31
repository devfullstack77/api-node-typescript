"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GaleriaService = void 0;
const result_1 = require("../infra/result");
const galeriaRepository_1 = require("../repository/galeriaRepository");
class GaleriaService {
    /**
    * @summary Obter por id
    * @param {string} _id Id object
    * @returns Json
    */
    get(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = new result_1.Result();
            result.Data = yield galeriaRepository_1.GaleriaRepository.findById(_id);
            return result.Data;
        });
    }
    /**
    * @summary Listar dados da galeria com paginação
    * @param {number} page Numero da paginação
    * @param {number} qtd  Limite de registros por pesquisa
    * @returns Json
    */
    getAll(page, qtd) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = new result_1.Result();
            result.Page = page;
            result.Qtd = qtd;
            result.Total = yield galeriaRepository_1.GaleriaRepository.count({});
            result.Data = yield galeriaRepository_1.GaleriaRepository.find({})
                .skip(page * qtd - qtd)
                .limit(qtd);
            return result;
        });
    }
}
exports.GaleriaService = GaleriaService;
