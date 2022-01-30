class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarReceitas()
    }

    criarReceitas() {
        const sql = 'CREATE TABLE IF NOT EXISTS Receitas (id int NOT NULL AUTO_INCREMENT, descricao varchar(50) NOT NULL, valor int(20), data DATE NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Receitas criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas