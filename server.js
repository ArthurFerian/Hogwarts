import express from "express";
import dados from "./src/data/dados.js";

const { bruxos, casas, varinhas, animais, pocoes } = dados;

const app = express();
app.use(express.json());

const serverPort = 3000;

app.get("/", (req, res) => {
    res.send("server funcionando")
})

app.get("/bruxos", (req, res) => {
    if (bruxos.length > 0) {
        res.status(200).json(bruxos);
    } else {
        res.status(404).json({
            mensagem: "Nenhum bruxo encontrado!"
        })
    }
})

app.get("/casas", (req, res)=>{
    if (casas.length > 0) {
        res.status(200).json(casas);
    } else {
        res.status(404).json({
            mensagem: "Nenhuma casa encontrada!"
        })
    }
});

app.get("/varinhas", (req, res)=>{
    if (varinhas.length > 0) {
        res.status(200).json(varinhas);
    } else {
        res.status(404).json({
            mensagem: "Nenhuma varinha encontrada!"
        })
    }
})

app.get("/animais", (req, res)=>{
    if (animais.length > 0) {
        res.status(200).json(animais);
    } else {
        res.status(404).json({
            mensagem: "Nenhum animal encontrado!"
        })
    }
})

app.get("/pocoes", (req, res)=>{
    if (pocoes.length > 0) {
        res.status(200).json(pocoes);
    } else {
        res.status(404).json({
            mensagem: "Nenhuma poção encontrada!"
        })
    }
})

app.get("/bruxos/:id", (req, res) => {
    const id = parseInt(req.params.id);
  
    const bruxo = bruxos.find((b) => b.id === id);
  
    if (bruxo) {
      res.status(200).json(bruxo);
    } else {
      res.status(404).json({
        mensagem: "bruxo nao encontrado!",
      });
    }
  });

app.get("/casas/:id", (req, res) => {
    const id = parseInt(req.params.id);
  
    const casa = casas.find((c) => c.id === id);
  
    if (casa) {
      res.status(200).json(casa);
    } else {
      res.status(404).json({
        mensagem: "casa nao encontrada!",
      });
    }
  });

app.get("/varinhas/:id", (req, res) => {
    const id = parseInt(req.params.id);
  
    const varinha = varinhas.find((v) => v.id === id);
  
    if (varinha) {
      res.status(200).json(varinha);
    } else {
      res.status(404).json({
        mensagem: "varinha nao encontrada!",
      });
    }
  });

app.get("/animais/:id", (req, res) => {
    const id = parseInt(req.params.id);
  
    const animal = animais.find((a) => a.id === id);
  
    if (animal) {
      res.status(200).json(animal);
    } else {
      res.status(404).json({
        mensagem: "animal nao encontrado!",
      });
    }
  });
app.get("/pocaos/:id", (req, res) => {
    const id = parseInt(req.params.id);
  
    const pocao = pocaos.find((p) => p.id === id);
  
    if (pocao) {
      res.status(200).json(pocao);
    } else {
      res.status(404).json({
        mensagem: "pocao nao encontrada!",
      });
    }
  });



app.listen(serverPort, () => {
    console.log(`Servidor rodando em http://localhost:${serverPort} `);
    
})