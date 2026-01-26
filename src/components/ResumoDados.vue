<template>
  <div id="card_resumo">
          <div class="tituloResumo">
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
                  maximumFractionDigits: 2}) }}</p>
              </div>
              <div class="card vendas"><span class="cardTitle">Vendas</span>
                <p>{{ DADOS.valorTotalVendas.toLocaleString('pt-BR', {
                  style: 'decimal', minimumFractionDigits: 2,
                  maximumFractionDigits: 2}) }}</p>
              </div>
              <div class="card saldo"><span class="cardTitle">Saldo</span>
                <p>{{ DADOS.valorSaldo.toLocaleString('pt-BR', {
                  style: 'decimal', minimumFractionDigits: 2,
                  maximumFractionDigits: 2}) }}</p>
              </div>
              <div class="card pAtingido"><span class="cardTitle">% Atingido</span>
                <p>{{ DADOS.percentualAtingido.toLocaleString('pt-BR', {
                  style: 'percent', minimumFractionDigits: 2,
                  maximumFractionDigits: 2}) }}</p>
              </div>
            </div>
          </div>
        </div>
</template>

<style scoped>
#card_resumo {
  width: 35%;
}

.tituloResumo {
  font-size: 1.5rem;
}

.tituloResumo p {
  margin: 0;
  padding: 0;
}

.conteudoResumo {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  border-style: solid;
  border-width: 1px;
  border-color: azure;
  padding: 5px;
}

#grafico {
  display: flex;
  align-items: flex-end;
}

#barraMeta {
  background-color: #0080ff;
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
  background-color: #0080ff;
}

.vendas {
  background-color: #009900;
}

.saldo {
  background-color: #b604ad;
}

.pAtingido {
  background-color: #f9d006;
  color: rgb(103, 104, 104);
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