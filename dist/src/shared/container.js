"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const galeriaService_1 = require("../services/galeriaService");
const noticiasService_1 = require("../services/noticiasService");
const videosService_1 = require("../services/videosService");
tsyringe_1.container.register('INoticiasService', {
    useClass: noticiasService_1.NoticiasService,
});
tsyringe_1.container.register('IVideosService', {
    useClass: videosService_1.VideosService,
});
tsyringe_1.container.register('IGaleriaService', {
    useClass: galeriaService_1.GaleriaService,
});
