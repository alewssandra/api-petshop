class DadosNaoFornecidos extends Error {
  constructor(mensagem) {
    super('Não foram fornecidos dados para atualizar!');
    this.name = 'DadosNaoFornecidos';
    this.idErro = 2;
  }
}

module.exports = DadosNaoFornecidos;