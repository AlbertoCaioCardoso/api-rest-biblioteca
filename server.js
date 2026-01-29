import http from "http";

const PORT = 3000;

const rotas = {
    "/" : "Curso de Node.Js",
    "/livros" : "Entrando na rota de Livros",
    "/autores" : "Entrando na rota de autores"
};

const server = http.createServer((req, res)=>{
    res.writeHead(200, { "Content-type": "text/plain"});
    res.end(rotas[req.url]);
});

server.listen(PORT,()=>{
    console.log("..:: Aplicação escutando ::..")
});