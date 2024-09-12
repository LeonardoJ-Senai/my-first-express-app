const express = require("express")
const app = express()
const PORTA = 3000
const path = require("path")
//Express os nosso arquivos estáticos estão aqui
app.use(
    express.static(path.join(__dirname,"public"))
)
//Quando o usuário entrar nessa rota, faça algo
app.get("/",(pedido,resposta)=>{
    resposta.sendFile(path.join(__dirname,"views","index.html"))
})
app.listen(PORTA,()=>{console.log(`Servidor rodando com sucesso no endereço: localhost:${PORTA}`)
})