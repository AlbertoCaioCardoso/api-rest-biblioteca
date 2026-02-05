import "dotenv/config"
import express from "express";
import conectaNaDatabse from "../config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await conectaNaDatabse();

conexao.on("error", (error)=>{
    console.log("Erro de conexão: ", error);
});

conexao.once("open", ()=>{
    console.log("..::Conexão com o banco de dados realizada com sucesso::..");
});

const app = express();
app.use(express.json());


app.get("/", (req, res)=>{
    res.status(200).send("Curso de node, agora com express.");
});

app.get("/livros", async (req, res)=>{
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
});

app.get("/livros/:id", (req, res)=>{
    const positionLivro = buscaLivro(req.params.id);
    res.status(200).json(livros[positionLivro]);
});

app.post("/livros", (req, res)=>{
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso")
});

app.put("/livros/:id", (req, res)=>{
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res)=>{
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro excluído com sucesso!")
});

export default app;