const express = require('express')
const app = express()
const cors = require('cors');
const socket = require('socket.io')
const port = process.env.PORT || 9700


app.use(express.json())
app.use(cors())

allUsers = {}

app.get('/health', (req, res) => {
    return res.json({message: "server is running fine"})
})

const server = app.listen(port, (err) => {
    if(err) throw err
    console.log(`Server is running on port ${port}`)
})

io = socket(server)

io.on('connection', (socket) => {

    socket.on('user_joined', (name) => {
        allUsers[socket.id] = name
        Content = {name, message:'joined the chat', type: 'received'}
        socket.broadcast.emit('receive', Content)
    })

    socket.on('send_message', (Content) => {
        Content.type = 'received'
        socket.broadcast.emit('receive', Content)
    })


    socket.on('disconnect', () => {
        Content = {name : allUsers[socket.id], message:'joined the chat', type: 'received'}
        socket.broadcast.emit('receive', Content)
        delete allUsers[socket.id]
    })
})