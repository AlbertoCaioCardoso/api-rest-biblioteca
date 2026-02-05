import "dotenv/config"
import express from "express";
import conectaNaDatabse from "../config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabse();

conexao.on("error", (error)=>{
    console.log("Erro de conexão: ", error);
});

conexao.once("open", ()=>{
    console.log("..::Conexão com o banco de dados realizada com sucesso::..");
});

const app = express();
routes(app);

app.delete("/livros/:id", (req, res)=>{
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro excluído com sucesso!")
});

export default app;