import { indicesComissao } from '../utils/globais';

export class Dados {
  constructor (descontosPorCondPgto, niveisDesconto, tabelaComissoes) {
    this._descontosPorCondPgto = descontosPorCondPgto;
    this._niveisDesconto = niveisDesconto;
    this._tabelaComissoes = tabelaComissoes;
  }
  _tipoOperador = 0;
  _valorMeta = 100000;
  _relatorioVendas = [];
  _valorTotalVendas = 0;
  _vendasPorNivelDesconto = {'A': 0, 'B': 0, 'C': 0, 'D': 0};

  // OPERAÇÕES COM TIPO DE OPERADOR
  set tipoOperador(tipoOperador) {
    this._tipoOperador = tipoOperador;
    this._tabelaComissoes = indicesComissao[tipoOperador];
  }

  get tipoOperador() {
    return this._tipoOperador;
  }

  // OPERAÇÕES COM TABELA DE COMISSÕES
  get tabelaComissoes() {
    return this._tabelaComissoes;
  }

  // OPERAÇÕES COM RELATÓRIO DE VENDAS

  somarVendas(vendas) {
    let total_vendas = 0;
    vendas.data.forEach(itemNota => {
      total_vendas += itemNota[14]
    });
    return total_vendas;
  }

  defineNivelDesconto(itemNota) {
    const condPgto = itemNota[22] || '000';
    const descontoItem = itemNota[16];
    const niveisDesconto = this._niveisDesconto;
    const descontosPorCondPgto = this._descontosPorCondPgto;
    if (descontoItem >= descontosPorCondPgto[condPgto][0]) {
      return niveisDesconto[0];
    } else if (descontoItem >= descontosPorCondPgto[condPgto][1]) {
      return niveisDesconto[1];
    } else if (descontoItem >= descontosPorCondPgto[condPgto][2]) {
      return niveisDesconto[2];
    }
    return niveisDesconto[3];
  };

  calcularVendasPorNivel(vendas) {
    let totalA = 0;
    let totalB = 0;
    let totalC = 0;
    let totalD = 0;

    vendas.data.forEach((itemNota, linha) => {
      this._relatorioVendas.data[linha].push(this.defineNivelDesconto(itemNota));
      if (itemNota[23] === 'A') {
        totalA += itemNota[14];
      } else if (itemNota[23] === 'B') {
        totalB += itemNota[14];
      } else if (itemNota[23] === 'C') {
        totalC += itemNota[14];
      } else if (itemNota[23] === 'D') {
        totalD += itemNota[14];
      }
    });
    
    return {
      'A': totalA,
      'B': totalB,
      'C': totalC,
      'D': totalD
    };
  }

  set relatorioVendas(vendas) {
    this._relatorioVendas = vendas;
    this._valorTotalVendas = this.somarVendas(this._relatorioVendas);
    this._vendasPorNivelDesconto = this.calcularVendasPorNivel(this._relatorioVendas);
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

  // OPERAÇÕES COM NÍVEL DA META
  get nivelMeta() {
    if (this.percentualAtingido < 0.8) {
      return 'D';
    } else if (this.percentualAtingido < 0.9) {
      return 'C';
    } else if (this.percentualAtingido < 1.0) {
      return 'B';
    } else if (this.percentualAtingido < 1.1) {
      return 'A';
    }
    return 'X';
  }

  // OPERAÇÕES COM VENDAS POR NÍVEL DE DESCONTO
  get vendasPorNivelDesconto() {
    return this._vendasPorNivelDesconto;
  }
}