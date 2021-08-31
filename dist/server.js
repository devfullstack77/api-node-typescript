"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./src/shared/container");
const database_1 = __importDefault(require("./src/infra/database"));
const express_1 = __importDefault(require("express"));
const noticiasRouter_1 = __importDefault(require("./src/router/noticiasRouter"));
const videosRouter_1 = __importDefault(require("./src/router/videosRouter"));
const galeriaRouter_1 = __importDefault(require(".//src/router/galeriaRouter"));
class Server {
    constructor() {
        this._db = new database_1.default();
        this.app = (0, express_1.default)();
        this._db.createConnection();
        this.routes();
    }
    routes() {
        // Route Health Check
        this.app.route('/').get((req, res) => {
            res.send({ versao: '0.0.3' });
        });
        this.app.use('/', noticiasRouter_1.default);
        this.app.use('/', galeriaRouter_1.default);
        this.app.use('/', videosRouter_1.default);
    }
}
exports.default = new Server();
//TODO: Criar o Repositorio no GIT
//TODO: Terminar o README, descrição e objetivo
//TODO: Fazer um review
