import express from 'express';
import LivroController from '../controllers/livroController.js';

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/:id", LivroController.listarLivroById);
routes.post("/livros", LivroController.cadastrarLivros);
routes.put("/livros/:id", LivroController.atualizarLivroById);
routes.delete("/livros/:id", LivroController.deletarLivro)

export default routes;