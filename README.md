# JavaScript com TypeScript

[![GitHub issues](https://img.shields.io/github/issues/devfullstack77/cadastro-nestjs)](https://github.com/devfullstack77/cadastro-nestjs/issues) [![GitHub forks](https://img.shields.io/github/forks/devfullstack77/cadastro-nestjs)](https://github.com/devfullstack77/cadastro-nestjs/network) [![GitHub stars](https://img.shields.io/github/stars/devfullstack77/cadastro-nestjs)](https://github.com/devfullstack77/cadastro-nestjs/stargazers) [![GitHub license](https://img.shields.io/github/license/devfullstack77/cadastro-nestjs)](https://github.com/devfullstack77/cadastro-nestjs/blob/main/LICENSE)

## Descrição

Projeto para demonstrar a utilização do TypeScript sem a utilização de framework progressivo, utilizando o Mongodb para obter os dos dados.

## Objetivo
Treinar o desenvolvimento com TypeScript usando as técnicas de POO, interfaces, herança e injeção de dependência.

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://docs.docker.com/)
- [Mongoose](https://mongoosejs.com/)


## 🎲 Instalação

Iniciando Docker < Mongodb >

```bash
├── docker
│   └── docker-compose.yml

$ docker-compose up -d
```

Dados para a conexão com o banco.

```bash
  mongodb://localhost:27017
```

Para adicionar registros no banco <b>noticias</b>, precisa rodar o conteúdo dos arquivos abaixo:

```bash
├── mongo
│   │   ├── insertDocumentsCollectionGaleria.js
│   │   ├── insertDocumentsCollectionNoticias.js
│   │   └── insertDocumentsCollectionVideos.js
```

Instalando as dependências da aplicação

```bash
$ npm install
```

## ✨ Iniciando a aplicação

```bash
# compile
$ npm run compile

# development
$ npm run start

# watch mode
$ npm run startw
```

Deverá rodar na porta 3000

```bash
   http://localhost:3000
```

## ✅ Rotas da aplicação

#### Notícias

- <b>Listando</b>

  - localhost:3000/api/noticias/:page/:qtd
  - Parameters:
    - page ( paginação )
    - qtd ( limite de registros)

```bash
   http://localhost:3000/api/noticias/1/1
```

- <b>Obtendo por id</b>

  - localhost:3000/api/noticias/id
  - Parameters:
    - id ( ObjectId )

```bash
   http://localhost:3000/api/noticias/:id
```

#### Vídeos

- Listando
  - localhost:3000/api/videos/:page/:qtd
  - Parameters:
    - page ( paginação )
    - qtd ( limite de registros)

```bash
   http://localhost:3000/api/videos/1/1
```

- Obtendo por id
  - localhost:3000/api/videos/id
  - Parameters:
    - id ( ObjectId )

```bash
   http://localhost:3000/api/videos/:id
```

#### Galeria

- Listando
  - localhost:3000/api/galeria/:page/:qtd
  - Parameters:
    - page ( paginação )
    - qtd ( limite de registros)

```bash
   http://localhost:3000/api/galeria/1/1
```

- Obtendo por id
  - localhost:3000/api/galeria/id
  - Parameters:
    - id ( ObjectId )

  ```bash
    http://localhost:3000/api/galeria/:id
  ```

## Estrutura das pastas

```bash
 
├── docker
│   └── docker-compose.yml
├── index.ts
├── package.json
├── package-lock.json
├── README.md
├── server.ts
├── src
│   ├── controller
│   │   ├── galeriaController.ts
│   │   ├── noticiasController.ts
│   │   └── videosController.ts
│   ├── infra
│   │   ├── database.ts
│   │   └── result.ts
│   ├── interfaces
│   │   ├── IGaleriaService.ts
│   │   ├── INoticiasService.ts
│   │   ├── IServices.ts
│   │   └── IVideosService.ts
│   ├── models
│   │   ├── base.ts
│   │   ├── fotos.ts
│   │   ├── galeria.ts
│   │   ├── noticias.ts
│   │   └── videos.ts
│   ├── mongo
│   │   ├── insertDocumentsCollectionGaleria.js
│   │   ├── insertDocumentsCollectionNoticias.js
│   │   └── insertDocumentsCollectionVideos.js
│   ├── repository
│   │   ├── galeriaRepository.ts
│   │   ├── noticiasRepository.ts
│   │   └── videosRepository.ts
│   ├── router
│   │   ├── galeriaRouter.ts
│   │   ├── noticiasRouter.ts
│   │   └── videosRouter.ts
│   ├── services
│   │   ├── galeriaService.ts
│   │   ├── noticiasService.ts
│   │   └── videosService.ts
│   └── shared
│       └── container.ts
└── tsconfig.json

```
