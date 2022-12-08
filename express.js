import express from 'express'
import bodyParser from 'body-parser'
import { User } from './database/models.js'

const app = express()
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));


app.get('/books',async (req,res) => {
    res.send(await User.findAll())
})

app.get('/books/:id',async (req,res) => {
    res.send(await User.findOne({ where: { id: req.params.id } }))
})

app.put('/books/:id',async (req,res) => {
    const data = await User.update(
        { Name: req.body.name },
        { where: { id: req.params.id } }
    )
    res.send(data ? 'Success': 'Error')
})

app.post('/books',async (req,res) => {
    res.send(await User.create({
        Name: req.body.name
    }))

})

app.delete('/books/:id',async (req,res) => {
    const data = await User.destroy({
        where: {
          id: req.params.id
        }
    })
    res.send(data ? 'Success': 'Error')
})


app.listen(8081)