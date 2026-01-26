<template>
  <div id="dashboard">
    <BarraConfiguracoes />
    <div id="corpo">
      <div id="primeiraLinha">
        <ResumoDados />
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
}
</style>

<script setup>
import { reactive, computed, provide } from 'vue';
import { Dados } from '../classes/Dados';

const DADOS = reactive(new Dados());
provide('appDados', DADOS);

import BarraConfiguracoes from './BarraConfiguracoes.vue';
import ResumoDados from './ResumoDados.vue';

</script>