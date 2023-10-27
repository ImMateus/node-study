// ira recber o modulo express
const express = require("express")
const app = express()  //criara uma copia inteira do express na variavel app

//rota
    /*método HTTP - CRUD (CREATE - READ - UPDATE - DELETE)
        GET > Pegar uma info.
        POST > Criar uma info.
        PUT > Alterar TODA a info.
        UPDATE > Alterar PARTE da info.
        DELTE > Apagar uma info.
    */   

//irá retornar á página html 
app.get("/", function(req,res){
    res.sendFile(__dirname + "/html/index.html") //__dirname busca todo o diretório completo ex: D:\Programação\Node
})

app.get("/sobre", function(req,res){
    res.sendFile(__dirname + "/html/sobre")
})

app.get("/Contato", function(req,res){
    res.send("Contanto Page")
})

//parâmetro
    //Parâmetro se da através do /: , ex: /Ola/:nome
app.get("/Ola/:nome/:sobrenome", function(req,res){
    res.send("Ola " + req.params.nome + req.params.sobrenome) // irá mostrar "Ola Mateus"
})


app.listen(8081, function(){
    console.log('Servidor rodando na url http://localhost:8081')
}) //Abri o servidor em express;  !!Tem que ser a ultima linha do código!!