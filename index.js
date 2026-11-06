import express from "express";

const app = express();

// Configuração  EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// Array de times
const times = [
    {
        id: 1,
        nome: "Grêmio",
        estadio: "Arena do Grêmio",
        cidade: "Porto Alegre/RS"
    },
    {
        id: 2,
        nome: "Internacional",
        estadio: "Beira-Rio",
        cidade: "Porto Alegre/RS"
    },
    {
        id: 3,
        nome: "Juventude",
        estadio: "Alfredo Jaconi",
        cidade: "Caxias do Sul/RS"
    }
];

// Rota inicial
app.get("/", (req, res) => {
    res.render("index", {
        mensagem: "Seja Bem-vindo ao sistema de times!"
    });
});

// Lista de times
app.get("/times", (req, res) => {
    res.render("times", {
        times: times
    });
});

// Detalhes do time
app.get("/times/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const time = times.find(t => t.id === id);

    if (!time) {
        return res.send("Time não encontrado.");
    }

    res.render("detalhe", {
        time: time
    });
});

// Servidor rodando na porta 3000
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});