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

export default app;