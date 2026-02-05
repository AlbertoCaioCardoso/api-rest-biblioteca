import { autor } from "../models/Autor";

class AutorController {

    //GET
    static async listarAutores(req, res){
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (error) {
            res.status(500).json({message: `${error.message} - FALHA AO LISTAR AUTORES`})
        }
    };

    //GET:ID
    static async listarAutorById(req, res){
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (error) {
            res.status(500).json({message: `${error.message} - FALHA AO BUSCAR AUTOR`})
        }
    };

    //PUT
    static async atualizarAutorById(req, res){
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message : "AUTOR ATUALIZADO"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - FALHA AO ATUALIZAR INFORMAÇÃO DO AUTOR`})
        }
    };

    //POST
    static async cadastrarAutor(req, res){
        try{
            const novoAutor = await autor.create(req.body);
            res.status(201).json(novoAutor);
        } catch(error){
            res.status(500).json({message: `${error.message} - FALHA AO CADASTRAR AUTOR`});
        };
    };

    //DELETE
    static async deletarAutor(req, res){
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message : "AUTOR DELETADO COM SUCESSO"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - FALHA AO DELETAR ESTE AUTOR`})
        }
    };
};

export default AutorController;