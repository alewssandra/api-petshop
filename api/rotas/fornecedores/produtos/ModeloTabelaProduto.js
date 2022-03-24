const Sequeliza = require('sequelize')
const instancia = require('../../../banco-de-dados')

const colunas = {
    titulo: {
        type: Sequeliza.STRING,
        allowNull: false
    },
    preco: {
        type: Sequeliza.DOUBLE,
        allowNull: false
    },
    estoque: {
        type: Sequeliza.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    fornecedor: {
        type: Sequeliza.INTEGER,
        allowNull: false,
        references: {
            model: require('../ModeloTabelaFornecedor'),
            key: 'id'
        }
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'produtos',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}

module.exports = instancia.define('produto', colunas, opcoes)