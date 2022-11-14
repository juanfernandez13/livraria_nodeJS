import autores from "../models/Autor.js"

class AutorController {
    static listarAutor = (req,res) => {
        autores.find((err, autores) =>{
            res.status(200).json(autores)
        })
    }
    static listarAutorPorID = (req,res) => {
        const id = req.params.id;
        autores.findById(id,(err, autores) =>{
            if(err)
                res.status(400).send({message:"Autor não encontrado"});
            else
                res.status(200).json(autores);
        })
    }

    static cadastrarAutor = (req,res) => {
        const autor = new autores(req.body);
        autor.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar o autor`});
            } 

            res.status(201).send(autor.toJSON()); 
        })
    }

    static atualizarAutor = (req,res) => {
        const id = req.params.id;
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err)
                res.status(200).send({message:"Autor Atualizado com sucesso"})
            else
            res.status(500).send({message:"Autor não atualizado "})
        })
    }
    
}

export default AutorController;