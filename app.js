import server from './index.js'

const app = server()

app.get('/book',(req,res) => {
    res.end('Hello')
})

app.get('/book/1',(req,res) => {
    res.end('Hello')
})

app.listen(3000)