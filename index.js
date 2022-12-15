const express = require('express') // importando a biblioteca 'express'

const server = express(); // importando a biblioteca 'server'

server.get('/home', ()=>{
    console.log('Você está tentando acessar a página home...')
})

server.get('/', ()=>{
    console.log('Você está tentando acessar a página inicial.')
})

server.get('/login', ()=>{
    console.log('Você está tentando acessar a página de login.')
})

server.get('/perfil', ()=>{
    console.log('Você está tentando acessar a página de perfil.')
})

server.get('/', ()=>{
    console.log('Você está tentando acessar a página inicial.')
})

server.listen(3000)