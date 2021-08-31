"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
const noticiasController_1 = require("../controller/noticiasController");
const noticiasRouter = (0, express_1.default)();
const noticia = tsyringe_1.container.resolve(noticiasController_1.NoticiasController);
noticiasRouter
    .route('/api/noticias/:page/:qtd')
    .get((req, res) => {
    return noticia.get(req, res);
});
noticiasRouter.route('/api/noticias/:id').get((req, res) => {
    return noticia.getById(req, res);
});
exports.default = noticiasRouter;
