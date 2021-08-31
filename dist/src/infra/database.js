"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class Database {
    constructor() {
        this.db = 'mongodb://localhost:27017/noticias';
    }
    createConnection() {
        mongoose_1.default.connect(this.db);
    }
}
exports.default = Database;
