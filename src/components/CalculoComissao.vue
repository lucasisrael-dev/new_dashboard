<template>
    <div id="principal">
        <p class="tituloSuperCard">Calculo de Comissão</p>
        <div class="conteinerCalculoComissao">
            <div class="containerTabelaComissao">
                <table>
            <thead>
                <tr class="linhaValores">
                    <th>Níveis de desconto: </th>
                    <th>A</th>
                    <th>B</th>
                    <th>C</th>
                    <th>D</th>
                </tr>
                <tr class="linhaValores">
                    <th>Vendas por Nível: </th>
                    <th>{{ formatarNumeroParaPtBr(DADOS.vendasPorNivelDesconto['A']) }}</th>
                    <th>{{ formatarNumeroParaPtBr(DADOS.vendasPorNivelDesconto['B']) }}</th>
                    <th>{{ formatarNumeroParaPtBr(DADOS.vendasPorNivelDesconto['C']) }}</th>
                    <th>{{ formatarNumeroParaPtBr(DADOS.vendasPorNivelDesconto['D']) }}</th>
                </tr>
            </thead>
            <tbody>
                <tr class="linhaIndices" :class="{ selected: DADOS.nivelMeta === 'X' }">
                    <td><span v-if="DADOS.nivelMeta === 'X'">👉 </span><span>Meta Grau X: </span></td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.X[0]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.X[1]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.X[2]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.X[3]) }}%</td>
                </tr>
                <tr class="linhaIndices" :class="{ selected: DADOS.nivelMeta === 'A' }">
                    <td><span v-if="DADOS.nivelMeta === 'A'">👉 </span><span>Meta Grau A: </span></td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.A[0]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.A[1]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.A[2]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.A[3]) }}%</td>
                </tr>
                <tr class="linhaIndices" :class="{ selected: DADOS.nivelMeta === 'B' }">
                    <td><span v-if="DADOS.nivelMeta === 'B'">👉 </span><span>Meta Grau B: </span></td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.B[0]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.B[1]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.B[2]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.B[3]) }}%</td>
                </tr>
                <tr class="linhaIndices" :class="{ selected: DADOS.nivelMeta === 'C' }">
                    <td><span v-if="DADOS.nivelMeta === 'C'">👉 </span><span>Meta Grau C: </span></td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.C[0]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.C[1]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.C[2]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.C[3]) }}%</td>
                </tr>
                <tr class="linhaIndices" :class="{ selected: DADOS.nivelMeta === 'D' }">
                    <td><span v-if="DADOS.nivelMeta === 'D'">👉 </span><span>Meta Grau D: </span></td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.D[0]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.D[1]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.D[2]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.D[3]) }}%</td>
                </tr>
            </tbody>
            <tfoot>
                    <tr class="linhaValores">
                    <td>Comissão por Nível: </td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.vendasPorNivelDesconto['A'] * (DADOS.tabelaComissoes[DADOS.nivelMeta][0] / 100)) }}</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.vendasPorNivelDesconto['B'] * (DADOS.tabelaComissoes[DADOS.nivelMeta][1] / 100)) }}</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.vendasPorNivelDesconto['C'] * (DADOS.tabelaComissoes[DADOS.nivelMeta][2] / 100)) }}</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.vendasPorNivelDesconto['D'] * (DADOS.tabelaComissoes[DADOS.nivelMeta][3] / 100)) }}</td>
                </tr>
            </tfoot>
        </table>
        </div>
        <div class="cardsTotais">
            <div class="card cardTotalComissao">
                <span>Valor Total Comissão</span>
                <p>{{ formatarNumeroParaPtBr(valorTotalComissao) }}</p>
            </div>
            <div class="card cardDiasUteis">
                <span>Qtde. dias úteis</span>
                <p>{{ qtdeDiasUteisNoMes }}</p>
            </div>
            <div class="card cardTotalDSR">
                <span>Valor DSR</span>
                <p>{{ formatarNumeroParaPtBr(valorDSR) }}</p>
            </div>
            <div class="card cardTotalGeral">
                <span>Total (Comissão + DSR)</span>
                <p>{{ formatarNumeroParaPtBr(valorTotalComissao + valorDSR) }}</p>
            </div>
        </div>    
        </div>
        
    </div>
</template>

<style scoped>
#principal {
    width: calc(67% - 1rem);
}

.conteinerCalculoComissao {
    display: flex;
    justify-content: space-between;
    height: calc(20rem - 20px);
    border: 1px solid azure;
    padding: 10px;
}

.containerTabelaComissao {
  width: 75%;
}

.cardsTotais {
  width: 23%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

table {
    width: 100%;
    height: 100%;
}

tr.linhaIndices {
    font-size: 0.9rem;
    background-color: #2a2307;
}

tr.linhaValores {
    font-size: 1.1rem;
    background-color: #061f36;
}

tr.selected {
    background-color: rgb(48, 48, 21);
}

td, th {
    text-align: right;
    padding: 10px;
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

.cardTotalComissao {
  background-color: #0080ff;
}

.cardDiasUteis {
  background-color: #009900;
}

.cardTotalDSR {
  background-color: #b604ad;
}

.cardTotalGeral {
  background-color: #dbb005;
}

</style>

<script setup>
import { inject, ref, computed } from 'vue';
import { formatarNumeroParaPtBr } from '../utils/utils';
const DADOS = inject('appDados');

const valorTotalComissao = computed(() => {
    let total = 0;
    for (const nivel in DADOS.vendasPorNivelDesconto) {
        const vendas = DADOS.vendasPorNivelDesconto[nivel];
        const indiceComissao = DADOS.tabelaComissoes[DADOS.nivelMeta][['A', 'B', 'C', 'D'].indexOf(nivel)];
        total += vendas * (indiceComissao / 100);
    }
    return total;
});

const valorDSR = computed(() => {
    return (valorTotalComissao.value /  qtdeDiasUteisNoMes * (qtdeDiasNoMes - qtdeDiasUteisNoMes));
});

let qtdeDiasUteisNoMes = 26 //ref(obtemQtdeDiasUteisNoMes());

function obtemQtdeDiasUteisNoMes() {
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = hoje.getMonth();
    let qtdeDiasUteis = 0;

    const diasNoMes = new Date(ano, mes + 1, 0).getDate();

    for (let dia = 1; dia <= diasNoMes; dia++) {
        const dataAtual = new Date(ano, mes, dia);
        const diaSemana = dataAtual.getDay();
        if (diaSemana !== 0) {
            qtdeDiasUteis++;
        }
    }
    return qtdeDiasUteis;
}
const qtdeDiasNoMes = 31 // ref(obtemQtdeDiasNoMes());
function obtemQtdeDiasNoMes() {
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = hoje.getMonth();
    return new Date(ano, mes + 1, 0).getDate();
}

</script>