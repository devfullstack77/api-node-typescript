"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticiasRepository = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const NoticiasSchema = new mongoose_1.default.Schema({
    titulo: { type: String },
    texto: { type: String },
    autor: { type: String },
    imagem: { type: String },
    dataPublicacao: { type: Date },
    tags: { type: String },
    link: { type: String },
    ativo: { type: Boolean },
});
exports.NoticiasRepository = mongoose_1.default.model('Noticias', NoticiasSchema);
