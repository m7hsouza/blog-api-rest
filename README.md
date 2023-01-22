# Blog API REST

Intuito desse projeto é colocar em pratica alguns dos principais conceitos de um API REST. foi criado durantes as aulas do canal do [Rodrigo Branas](https://www.youtube.com/playlist?list=PLQCmSnNFVYnQ28Gd7SmWiM-dChqaWiy8i).

## Tecnologias usadas
 - [NodeJS](https://nodejs.org/en/)
 - [Expres](https://expressjs.com/pt-br/)
 - [Jest](https://jestjs.io/pt-BR/)
 - [PostgreSQL](https://www.postgresql.org)

## Testando a aplicação
	para testar a aplicação em maquina local, é necessário ter o nodejs e um banco de dados postgreSQL instalando na sua maquina. Depois de ter instalado todos os requisitos siga os passos abaixo.

- Faça um clone desse repositório usando:
```bash
git clone https://github.com/m7hsouza/blog-api-rest.git
cd blog-api-rest
```
- Para configurar o banco de dados basta executar os comando que estão dentro do arquivo `database/create.sql`.

- Instalando dependências.
```bash
yarn install 
```
ou
```
npm install
```

- Executando aplicação
```bash
node server/index.js
```

- Executando test
```bash
yarn test
```
ou
```bash
npm run test
```

## Rotas
- (POST) /posts
	-	Rota responsável por criar de um novo post. `title` e `description`são os parâmetros que devem ser enviados no corpo da requisição.

- (GET) /posts
	-	Rota responsável por retornar todos os posts criados.

- (PUT) /posts/:id
	-	Rota responsável por atualizar um post. `title` e `description`são os parâmetros que devem ser enviados no corpo da requisição.

- (DELETE) /posts/:id
	-	Rota responsável por deletar um post. `title`.