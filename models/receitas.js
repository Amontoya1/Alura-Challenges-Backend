const conexao = require('../infraestructura/conexao')

class Receitas {
    adiciona(receitas) {
        const sql = 'INSERT INTO Receitas SET ?'

        conexao.query(sql, receitas, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }
}

module.exports = new Receitas