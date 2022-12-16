const express = require('express'); // importando a biblioteca 'express'

const server = express(); // importando a biblioteca 'server'

const path = require('path');
// server.get('/home', ()=>{
//     console.log('Você está tentando acessar a página home...')
// })

server.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname+'/paginas/index.html'))
})

server.get('/desenvolvedores', (req, res)=>{
    res.sendFile(path.join(__dirname+'/paginas/desenvolvedores.html'))
})

server.get('/inscricao', (req, res)=>{
    res.sendFile(path.join(__dirname+'/paginas/inscricao.html'))
})

server.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname+'/paginas/login.html'))
})

server.get('/perfil', (req, res)=>{
    res.sendFile(path.join(__dirname+'/paginas/perfil.html'))
})

server.listen(3000)