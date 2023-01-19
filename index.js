const express = require('express');
const server = express();
const path = require('path');
const bodyParser = require('body-parser');
const database = require('./db');
const Perfil = require('./modelos/perfil');

server.use(express.static(path.join(__dirname, 'public')));

server.use(bodyParser.json());

server.use(bodyParser.urlencoded({
    extended: true
}));

(async() => {
 
 try{
    const resultado = await database.sync();
    console.log(resultado);


 }catch(error){
    console.log(error);
 }
})();

server.post('/salvarPerfil', async(req, res)=>{
    const createPerfil = await Perfil.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        telefone: req.body.telefone,
        bairro: req.body.bairro,
        rua: req.body.rua,
        cep: req.body.cep,
        estado: req.body.estado,
        email: req.body.email,
        pais: req.body.pais,
        login: req.body.login,
        senha: req.body.senha
    });
    console.log(createPerfil);
    res.sendFile(path.join(__dirname+'/public/paginas/index.html'))
})


server.get('/', (req, res)=>{    
    res.sendFile(path.join(__dirname, '/public/paginas/index.html'))
})

server.get('/desenvolvedores', (req, res)=>{
    res.sendFile(path.join(__dirname+'/public/paginas/desenvolvedores.html'))
})

server.get('/inscricao', (req, res)=>{
    res.sendFile(path.join(__dirname+'/public/paginas/inscricao.html'))
})

server.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname+'/public/paginas/login.html'))
})

server.get('/perfil', (req, res)=>{
    res.sendFile(path.join(__dirname+'/public/paginas/perfil.html'))
})


server.listen(3000)