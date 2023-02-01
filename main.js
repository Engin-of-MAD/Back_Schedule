const http = require("http")
const express = require('express')
const hostname = '127.0.0.1'
const port = 3000
const app = express()

app.use(express.static('app'));
app.use(express.static('bower_components'))
app.use(express.static('lib'))

app.get('/', (req, res) => {
    res.sendFile(__dirname+`/app/index.html`)
    res.send('random.text');
})

app.get('/index.html', (req, res) => {
    app.use(express.static('public'))
    res.sendFile(__dirname+`/app/index.html`)
})

app.get('/index.html#!/Form/send_form', (req, res) =>{
    alert('Запрос отправлен')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const server = http.createServer((req, res)=>{
    res.statusCode = 200
})

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://localhost:${port}/index.html`)
})
