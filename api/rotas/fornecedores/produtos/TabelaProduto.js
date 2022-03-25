const Modelo = require('./ModeloTabelaProduto')

//exporta a função que cria o modelo
module.exports = {
    listar (idFornecedor) {
        return Modelo.findAll({
            where: {
                fornecedor: idFornecedor
            }
        })
    },
    inserir (dados) {
        return Modelo.create(dados)
    }
}