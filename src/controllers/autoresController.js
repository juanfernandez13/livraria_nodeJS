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


}

export default AutorController;