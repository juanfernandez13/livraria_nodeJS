<h1 align="center">
  <img src="https://i.giphy.com/media/VDdh2wgmzsXAc7FCd7/giphy.webp" onerror="this.onerror=null;this.src='https://i.giphy.com/VDdh2wgmzsXAc7FCd7.gif'" alt="livros" height = "80" width = "60">
   Desenvolvimento de API REST em NodeJS 
  <img src="https://i.giphy.com/media/VDdh2wgmzsXAc7FCd7/giphy.webp" onerror="this.onerror=null;this.src='https://i.giphy.com/VDdh2wgmzsXAc7FCd7.gif';" alt="livros" height = "80" width = "60">
</h1>

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=CONCLUÍDO&color=GREEN&style=for-the-badge)
![Linguagem](https://img.shields.io/github/languages/top/juanfernandez13/livraria_nodeJS?color=yellow&style=for-the-badge)
![Tamanho](https://img.shields.io/github/languages/code-size/juanfernandez13/livraria_nodeJS?color=yellow&style=for-the-badge)
![última atualização](https://img.shields.io/github/last-commit/juanfernandez13/livraria_nodeJS?color=yellow&style=for-the-badge)


## Sobre o projeto :man_technologist:
O Projeto consiste no desenvolvimento de uma API para uma Livraria. Nesse processo foram utilizados:
- Padrão MVC
- Verbos HTTP seguindo o padrão REST
- Implementação de todas as operações de CRUD

<h2>
  Tecnologias
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height = "25" width = "40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height = "25" width = "40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height = "25" width = "40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height = "25" width = "40"/>   
</h2>

- JavaScript
- NodeJS 
- Express
- MongoDB 

## Rotas 🚩
### Livros 📚
| Métodos |    Rotas     |               Descrição               |
| ------- | :----------: | :-----------------------------------: |
| GET     |   /livros    |   Retorna todos os livros cadastrados |
| GET     | /livros/_id_   |   Retorna livro especificado por id   |
| GET     | /livros/_busca_|   Realiza uma busca pela editora      |
| POST    |   /livros    |     Cria um novo livro na tabela      |
| PATCH   | /livros/_id_ | Atualiza um livro identificado por id |
| DELETE  | /livros/_id_ |  Deleta um livro especificado por id  |
### Autores ✍️
| Métodos |    Rotas     |               Descrição               |
| ------- | :----------: | :-----------------------------------: |
| GET     |   /autores    |   Retorna todos os autores cadastrados|
| GET     | /autores/_id_   |   Retorna um autor especificado por id|
| POST    |   /autores    |     Cadastra um novo autor na tabela  |
| PATCH   | /autores/_id_ | Atualiza um autor identificado por id |
| DELETE  | /autores/_id_ |  Deleta um autor especificado por id  |
