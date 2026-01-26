<template>
  <div id="dashboard">

    <!-- BARRA DE CONFIGURAÇÕES -->
    <div id="barra_configuracoes">
      <div id="tipo_operador" class="configuracoes">
        <input type="radio" name="tipo" id="vendedor" v-model.number="DADOS.tipoOperador" :value="0">
        <label for="vendedor">Vendedor</label>
        <input type="radio" name="tipo" id="gerente" v-model.number="DADOS.tipoOperador" :value="1">
        <label for="gerente">Gerente</label>
      </div>
      <div id="rel_vendas" class="configuracoes">
        <label for="vendas">Relatório de Vendas: </label>
        <input type="file" name="vendas" id="vendas" accept=".csv" @change="getUploadedFile">
      </div>
      <div id="valor_meta" class="configuracoes">
        <label for="meta">Meta: </label>
        <input type="number" name="meta" id="meta" step="1" v-bind:value="DADOS.valorMeta" v-on:input="(e) => {
          DADOS.valorMeta = Number(e.target.value);
        }">
        <!-- ATALHO DO v-bind: | : -->
        <!-- ATALHO DO v-on: | @ -->
      </div>
    </div>

    <!-- CORPO DA PÁGINA -->
    <div id="corpo">
      <div id="primeiraLinha">
        <div id="card_resumo">
          <div id="grafico">
            <div id="conteinerBarraMeta">
              <div id="barraMeta" :style="barraMetaTamanho"></div>
              <p>Meta</p>
            </div>
            <div id="conteinerBarraVendas">
              <div id="barraVendas" :style="barraVendasTamanho"></div>
              <p>Vendas</p>
            </div>
          </div>
          <div id="dados_resumidos">
            <div class="card meta"><span class="cardTitle">Meta</span>
              <p>{{ DADOS.valorMeta.toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2}) }}</p>
            </div>
            <div class="card vendas"><span class="cardTitle">Vendas</span>
              <p>{{ DADOS.valorTotalVendas.toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2}) }}</p>
            </div>
            <div class="card saldo"><span class="cardTitle">Saldo</span>
              <p>{{ DADOS.valorSaldo.toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2}) }}</p>
            </div>
            <div class="card pAtingida"><span class="cardTitle">% Atingida</span>
              <p>{{ DADOS.percentualAtingido.toLocaleString('pt-BR', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2}) }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div> <!-- FIM DO DASHBOARD -->
</template>

<script setup>
import { reactive, ref, computed } from 'vue';
import { Dados } from '../classes/Dados';
import Papa from 'papaparse'
import { papaparseConfig } from '../utils/utils';

const DADOS = reactive(new Dados());

const getUploadedFile = (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      DADOS.relatorioVendas = Papa.parse(e.target.result, papaparseConfig);
    };

    reader.onerror = (e) => {
      console.error("Error ao ler o arquivo: ", e.target.error);
    };

    reader.readAsText(file, 'latin1');
  }
};

const setBarHeight = function (meta, venda) {
  let tamanho = [16, 0];
  if (meta > venda) {
    tamanho[1] = ( 16 * venda) / meta;
  } else {
    tamanho[0] = ( 16 * meta) / venda;
    tamanho[1] = 16;
  }
  return tamanho;
}

const barraMetaTamanho = computed(() => {
  let tamanho = setBarHeight(DADOS.valorMeta, DADOS.valorTotalVendas)
  return {height: tamanho[0]+"rem"};
})

const barraVendasTamanho = computed(() => {
  let tamanho = setBarHeight(DADOS.valorMeta, DADOS.valorTotalVendas)
  return {height: tamanho[1]+"rem"};
})

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

#primeiraLinha {
  display: flex;
}

#card_resumo {
  width: 35%;
  display: flex;
  justify-content: space-around;
   align-items: stretch;
  border-style: solid;
  border-width: 1px;
  border-color: azure;
  border-radius: 5px;
  padding: 5px;
}

#grafico {
  display: flex;
  align-items: flex-end;
}

#barraMeta {
  background-color: #355c7d;
  width: 5rem;
  height: 16rem;
  margin: 5px;
}

#barraVendas {
  background-color: #009900;
  width: 5rem;
  height: 7rem;
  margin: 5px;
}

.card {
  width: 10rem;
  text-align: right;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
}

.card span {
  font-size: 0.8rem;
}

.card p {
  font-size: 1.3rem;
  margin: 5px;
}

.meta {
  background-color: #355c7d;
}

.vendas {
  background-color: #009900;
}

.saldo {
  background-color: #ec2049;
}

.pAtingida {
  background-color: #f9d006;
}
</style>