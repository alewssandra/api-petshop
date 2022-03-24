const modelos = [
    require('../rotas/fornecedores/ModeloTabelaFornecedor'),
    require('../rotas/fornecedores/produtos/ModeloTabelaProduto')
]

async function criarTabelas() {
    for (let contador = 0; contador < modelos.length; contador++) {
        const modelo = modelos[contador]
        //vai sicronizar o modelo com o banco de dados
        await modelo.sync({ force: true })
    }
}

criarTabelas()