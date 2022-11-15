import livros from "../models/Livro.js"

class LivroController {
    static listarLivros = (req,res) => {
        livros.find().populate('autor').exec((err, livros) =>{
            res.status(200).json(livros)
        })
    }
    static listarLivrosPorID = (req,res) => {
        const id = req.params.id;
        livros.findById(id).populate('autor','nome').exec((err, livros) =>{
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

    static atualizarLivro = (req,res) => {
        const id = req.params.id;
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err)
                res.status(200).send({message:"Livro Atualizado com sucesso"})
            else
            res.status(500).send({message:"Livro não atualizado "})
        })
    }
    static excluirLivro = (req,res) => {
        const id = req.params.id;
        livros.findByIdAndDelete(id, {$set: req.body}, (err) => {
            if(!err)
                res.status(200).send({message:"Livro deletado com sucesso"})
            else
            res.status(500).send({message:"Livro não deletado "})
        })
    }

    static listarLivroPorEditora = (req,res) => {
        const editora = req.query.editora;

        livros.find({'editora':editora},{}, (err,livros) =>{
            res.status(200).send(livros);
        })
    }
}

export default LivroController;