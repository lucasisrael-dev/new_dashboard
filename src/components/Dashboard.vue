<template>
  <div id="dashboard">

    <!-- BARRA DE CONFIGURAÇÕES -->
    <div id="barra_configuracoes">
      <div id="tipo_operador" class="configuracoes">
        <input type="radio" name="tipo" id="vendedor" value="0" checked>
        <label for="vendedor">Vendedor</label>
        <input type="radio" name="tipo" id="gerente" value="1">
        <label for="gerente">Gerente</label>
      </div>
      <div id="rel_vendas" class="configuracoes">
        <label for="vendas">Relatório de Vendas: </label>
        <input type="file" name="vendas" id="vendas" accept=".csv">
      </div>
      <div id="valor_meta" class="configuracoes">
        <label for="meta">Meta: </label>
        <input type="number" name="meta" id="meta" step="1" value="100000">
      </div>
    </div>

    <!-- CORPO DA PÁGINA -->
    <div id="corpo">
    </div>

  </div> <!-- FIM DO DASHBOARD -->
</template>

<script>
class Dados {
  constructor(tipoOperador, vendas, valorTotalMeta) {
    this.tipoOperador = tipoOperador;
    this.valorTotalMeta = valorTotalMeta;
    this.valorTotalVendas = 0;
    this.valorSaldo = this.valorTotalMeta - this.valorTotalVendas;
    this.percentualAtingido = this.valorTotalVendas / this.valorTotalMeta;
  }

  atualiza_tipo(tipoOperador) {
    this.tipoOperador = tipoOperador;
    this.recalcular();
  }

  atualiza_vendas(vendas) {
    this.valorTotalVendas = this.somarVendas(vendas)
    this.recalcular();
  }

  atualiza_meta(meta) {
    this.valorTotalMeta = meta;
    this.recalcular();
  }

  somarVendas(vendas) {
    let total_vendas = 0;
    vendas.forEach(itemNota => {
      total_vendas += itemNota[7]
    });
    return total_vendas;
  }

  recalcular() {
    this.valorSaldo = this.valorTotalMeta - this.valorTotalVendas;
    this.percentualAtingido = this.valorTotalVendas / this.valorTotalMeta;
  }
}


//let tipo_operador = 
/*
let valor_meta = document.getElementById('meta').value;

const DADOS = new Dados()

function processarPlanilhaVendas(conteudoPlanilha) {
  let dadosPlanilha = [];
  dadosLinhas = conteudoPlanilha.split('/r/n');
  dadosLinhas.forEach(linha => {
    dadosPlanilha.push(linha.split(";"))
  })
  return dadosPlanilha;
}

const fileInput = document.getElementById('vendas');

fileInput.addEventListener('change', (event) => {
  
  const arquivoSelecionado = event.target.files[0];
  
  if (!arquivoSelecionado) {
    return
  }
  
  const leitor = new FileReader();

  leitor.onload = (conteudo) => {
    processarPlanilhaVendas(conteudo.target.result);
  };

  leitor.onerror = () => {
    console.error("Erro ao ler o arquivo.");
  }

  leitor.readAsText(arquivoSelecionado, 'latin1')
});

*/
</script>

<style scoped>
#dashboard {
  min-width: 1150px;
}

#barra_configuracoes,
#meta {
  font-size: 1.3rem;
}

.configuracoes {
  display: inline-block;
}

#tipo_operador,
#valor_meta {
  width: 30%;

}

#rel_vendas {
  width: 40%;

}

#vendedor,
#gerente {
  margin: 10px;
}

#meta {
  width: 6rem
}
</style>