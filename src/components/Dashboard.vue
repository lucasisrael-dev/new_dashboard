<template>
  <div id="dashboard">
    <BarraConfiguracoes />
    <div id="corpo">
      <div id="primeiraLinha">
        <ResumoDados />
        <CalculoComissao />
      </div>
      <div class="segundaLinha tabelasTop">
        <div class="topDepartamentos"></div>
        <div class="topClientes"></div>
        <div class="topPintores"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#dashboard {
  min-width: 1150px;
}

#primeiraLinha {
  display: flex;
  gap: 1rem;
}
</style>

<script setup>
import { reactive, computed, provide } from 'vue';
import { Dados } from '../classes/Dados';
import { niveisDesconto, descontosPorCondPgto, indicesComissao } from '../utils/globais';

const DADOS = reactive(new Dados(descontosPorCondPgto, niveisDesconto, indicesComissao[0]));
provide('appDados', DADOS);

import BarraConfiguracoes from './BarraConfiguracoes.vue';
import ResumoDados from './ResumoDados.vue';
import CalculoComissao from './CalculoComissao.vue';

</script>