const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', '', {  // database , usuário , senha
    host: 'localhost', // local em que está ospedado o database
    dialect: 'mysql' // Qual é o SGDB?
})

const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: 'Tteste',
    conteudo: 'aaaa'
})