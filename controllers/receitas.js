const Receitas = require('../models/receitas')

module.exports = app => {
    app.get('/receitas', (req, res) => res.send('Você está na rota de receitas e está realizando um GET'))

    app.post('/receitas', (req, res) => {
        const receitas = req.body

        Receitas.adiciona(receitas)
        console.log(req.body)
        res.send('Post Receitas')
    })
     
     
}