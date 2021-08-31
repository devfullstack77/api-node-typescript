import mongoose from 'mongoose'
import { Noticias } from '../models/noticias'

const NoticiasSchema = new mongoose.Schema<Noticias>({
  titulo: { type: String },
  texto: { type: String },
  autor: { type: String },
  imagem: { type: String },
  dataPublicacao: { type: Date },
  tags: { type: String },
  link: { type: String },
  ativo: { type: Boolean },
})

export const NoticiasRepository = mongoose.model<Noticias>(
  'Noticias',
  NoticiasSchema,
)
