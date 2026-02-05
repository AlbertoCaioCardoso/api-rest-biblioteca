import express from 'express';
import AutorController from '../controllers/autoresController';

const routes = express.Router();

routes.get("/autor", AutorController.listarAutorById);
routes.get("/autor/:id", AutorController.listarAutorById);
routes.post("/autor", AutorController.cadastrarAutor);
routes.put("/autor/:id", AutorController.atualizarAutorById);
routes.delete("/autor/:id", AutorController.deletarAutor)

export default routes;