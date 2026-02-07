import livro from '../models/Livro.js';
import { autor } from '../models/Autor.js';

class LivroController {

    //GET
    static async listarLivros(req, res){
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({message: `${error.message} - FALHA AO LISTAR LIVROS`})
        }
    };

    //GET:ID
    static async listarLivroById(req, res){
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (error) {
            res.status(500).json({message: `${error.message} - FALHA AO BUSCAR LIVRO`})
        }
    };

    //PUT
    static async atualizarLivroById(req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message : "LIVRO ATUALIZADO"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - FALHA AO ATUALIZAR LIVRO`})
        }
    };

    //POST
    static async cadastrarLivros(req, res){
        const novoLivro = req.body;
        try{
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {...novoLivro, autor : {...autorEncontrado._doc} };
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json(livroCriado);

        } catch(error){
            res.status(500).json({message: `${error.message} - FALHA AO CADASTRAR LIVRO`});
        };
    };

    //DELETE
    static async deletarLivro(req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message : "LIVRO DELETADO COM SUCESSO"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - FALHA AO DELETAR ESTE LIVRO`})
        }
    };
};

export default LivroController;