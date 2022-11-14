import livros from "../models/Livro.js"

class LivroController {
    static listarLivros = (req,res) => {
        livros.find((err, livros) =>{
            res.status(200).json(livros)
        })
    }
    static listarLivrosPorID = (req,res) => {
        const id = req.params.id;
        livros.findById(id,(err, livros) =>{
            if(err)
                res.status(400).send({message:"Livro não encontrado"});
            else
                res.status(200).json(livros);
        })
    }

    static cadastrarLivro = (req,res) => {
        const livro = new livros(req.body);
        livro.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar o livro`});
            } 

            res.status(201).send(livro.toJSON()); 
        })
    }



}

export default LivroController;