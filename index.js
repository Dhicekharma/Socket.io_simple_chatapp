const express =require('express');
const socket =require('socket.io')
// app setup
const app =express()
server=app.listen(4000,()=>{console.log('server is up')})
// static files

app.use(express.static('public'))

// socket setup

const io=socket(server)
io.on('connection',(socket)=>{
    console.log('new cnnection made',socket.id)
//    broadcasting who is type to client
    socket.on('typing',(data)=>{
        console.log(data)
        socket.broadcast.emit('typing',data)
    })
// forwardinf msg to clients
    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data);
    })
})