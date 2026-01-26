<template>
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
</template>

<style scoped>
#barra_configuracoes {
  border: solid 1px white;
  margin-bottom: 20px;
  padding: 5px;
}
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
  width: 39%;
  border-left: solid 1px white;
  border-right: solid 1px white;
}

#vendedor,
#gerente {
  margin: 10px;
}

#meta {
  width: 6rem
}

</style>

<script setup>
import Papa from 'papaparse'
import { papaparseConfig } from '../utils/utils';
import { inject } from 'vue';

const DADOS = inject('appDados');

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
</script>