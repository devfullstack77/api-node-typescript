import mongoose from 'mongoose'

class Database {
  private db = 'mongodb://localhost:27017/noticias'

  createConnection() {
    mongoose.connect(this.db)
  }
}

export default Database
