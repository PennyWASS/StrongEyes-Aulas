const express = require('express');
const server = express();
const path = require('path');
const bodyParser = require('body-parser');
const database = require('./db');
const Perfil = require('./modelos/perfil');
const alert = require('alert');

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

server.post('/logar', async(req, res)=>{
    const selecUsuario = await Perfil.findOne({
        where:{
            login: req.body.email,
            senha: req.body.senha
        }
    });
    if(selecUsuario !== null){
        res.sendFile(path.join(__dirname+'/public/paginas/index.html'))
    } else{
        alert('Login ou senha incorretos'),
        res.sendFile(path.join(__dirname+'/public/paginas/login.html'))
    }
    if(selecUsuario == null || selecUsuario == ''){
        alert('Login vazio')
        res.sendFile(path.join(__dirname+'/public/paginas/login.html'))
    }
})

server.get('/listarUsuario', async(req, res)=>{
    const usuarios = await Perfil.findAll();
    console.log(usuarios);
})

server.get('/', (req, res)=>{    
    res.sendFile(path.join(__dirname, '/public/paginas/login.html'))
})

server.get('/desenvolvedores', (req, res)=>{
    res.sendFile(path.join(__dirname+'/public/paginas/desenvolvedores.html'))
})

server.get('/inscricao', (req, res)=>{
    res.sendFile(path.join(__dirname+'/public/paginas/inscricao.html'))
})

server.get('/index', (req, res)=>{
    res.sendFile(path.join(__dirname+'/public/paginas/index.html'))
})

server.get('/perfil', (req, res)=>{
    res.sendFile(path.join(__dirname+'/public/paginas/perfil.html'))
})


server.listen(3000)