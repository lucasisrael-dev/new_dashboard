export class Dados {
  _tipoOperador = 0;
  _valorMeta = 100000;
  _relatorioVendas = [];
  _valorTotalVendas = 0;

  // OPERAÇÕES COM TIPO DE OPERADOR
  set tipoOperador(tipoOperador) {
    this._tipoOperador = tipoOperador;
  }

  get tipoOperador() {
    return this._tipoOperador;
  }

  // OPERAÇÕES COM RELATÓRIO DE VENDAS
  set relatorioVendas(vendas) {
    this._relatorioVendas = vendas;
    this._valorTotalVendas = this.somarVendas(this._relatorioVendas);
  }

  somarVendas(vendas) {
    let total_vendas = 0;
    vendas.data.forEach(itemNota => {
      total_vendas += itemNota[14]
    });
    return total_vendas;
  }

  // OPERAÇÕES COM VALOR DA META
  set valorMeta(meta) {
    this._valorMeta = meta;
  }

  get valorMeta() {
    return this._valorMeta;
  }

  // OPERAÇÕES COM VALOR TOTAL DAS VENDAS
  get valorTotalVendas() {
    return this._valorTotalVendas;
  }

  // OPERAÇÕES COM VALOR DO SALDO
  get valorSaldo() {
    return this._valorTotalVendas - this._valorMeta;
  }

  // OPERAÇÕES COM O PERCENTUAL ATINGIDO
  get percentualAtingido() {
    return (this._valorTotalVendas / this._valorMeta)
  }
}