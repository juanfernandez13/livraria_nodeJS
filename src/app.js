import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log("conexão com o banco realizada com sucesso")
})

const app = express();

app.use(express.json());
routes(app);

app.get('/livros/:id', (req,res) => {
    const index = buscarLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.post('/livros', (req,res) => {
    livros.push(req.body);
    res.status(201).send('Livro foi cadastrado com sucesso')
});

app.put('/livros/:id', (req,res) => {
    const index = buscarLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(201).send('Livro foi alterado com sucesso')
});

app.delete('/livros/:id', (req,res) => {
    const {id} = req.params;
    const index = buscarLivro(id);
    livros.splice(index,1)
    res.status(201).send(`Livro ${id} removido com sucesso`)
});

const buscarLivro = (id) =>{
    return livros.findIndex(livro => livro.id == id);
};

export default app;