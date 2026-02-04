<template>
  <div id="card_resumo">
    <div class="tituloSuperCard">
      <p>Resumo</p>
    </div>
    <div class="conteudoResumo">
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
          <p>{{ DADOS.valorMeta.toLocaleString('pt-BR', {
            style: 'decimal', minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }) }}</p>
        </div>
        <div class="card vendas"><span class="cardTitle">Vendas</span>
          <p>{{ DADOS.valorTotalVendas.toLocaleString('pt-BR', {
            style: 'decimal', minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }) }}</p>
        </div>
        <div class="card saldo"><span class="cardTitle">Saldo</span>
          <p>{{ DADOS.valorSaldo.toLocaleString('pt-BR', {
            style: 'decimal', minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }) }}</p>
        </div>
        <div class="card pAtingido"><span class="cardTitle">% Atingido</span>
          <p>{{ DADOS.percentualAtingido.toLocaleString('pt-BR', {
            style: 'percent', minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#card_resumo {
  width: 33%;
}

.conteudoResumo {
  height: 20rem;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  border-style: solid;
  border-width: 1px;
  border-color: azure;
}

#grafico {
  width: 50%;
  padding: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

#conteinerBarraMeta p, #conteinerBarraVendas p {
  text-align: center;
  margin-top: 0.5rem;
}

#dados_resumidos {
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#barraMeta {
  background-color: #0080ff;
  width: 5rem;
  height: 16rem;
}

#barraVendas {
  background-color: #009900;
  width: 5rem;
}

.card {
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: right;
  padding: 5px;
  border-radius: 5px;
}

.card span {
  font-size: 0.8rem;
}

.card p {
  font-size: 1.6rem;
}

.meta {
  background-color: #0080ff;
}

.vendas {
  background-color: #009900;
}

.saldo {
  background-color: #b604ad;
}

.pAtingido {
  background-color: #dbb005;
}
</style>

<script setup>
import { inject, computed } from 'vue';
import { setBarHeight } from '../utils/utils';

const DADOS = inject('appDados')

const barraMetaTamanho = computed(() => {
  let tamanho = setBarHeight(DADOS.valorMeta, DADOS.valorTotalVendas)
  return { height: tamanho[0] + "rem" };
})

const barraVendasTamanho = computed(() => {
  let tamanho = setBarHeight(DADOS.valorMeta, DADOS.valorTotalVendas)
  return { height: tamanho[1] + "rem" };
})
</script>