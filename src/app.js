import express from "express";

const app = express();

app.use(express.json());

const livros = [
    {id: 1, 'titulo':'Senhor dos Aneis'},
    {id: 2, 'titulo':'O Hobbit'}
];

app.get('/', (req,res) =>{ 
    res.status(200).send('Curso de node');
});

app.get('/livros', (req,res) => {
    res.status(200).json(livros)
});

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