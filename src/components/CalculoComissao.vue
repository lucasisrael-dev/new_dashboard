<template>
    <div id="principal">
        <p class="tituloSuperCard">Calculo de Comissão</p>
        <table>
            <thead>
                <tr>
                <th></th>
                <th>A</th>
                <th>B</th>
                <th>C</th>
                <th>D</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.vendasPorNivelDesconto['A']) }}</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.vendasPorNivelDesconto['B']) }}</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.vendasPorNivelDesconto['C']) }}</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.vendasPorNivelDesconto['D']) }}</td>
                </tr>
                <tr>
                    <td><span v-if="DADOS.nivelMeta === 'X'">aqui</span></td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.X[0]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.X[1]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.X[2]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.X[3]) }}%</td>
                </tr>
                <tr>
                    <td><span v-if="DADOS.nivelMeta === 'A'">aqui</span></td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.A[0]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.A[1]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.A[2]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.A[3]) }}%</td>
                </tr>
                <tr>
                    <td><span v-if="DADOS.nivelMeta === 'B'">aqui</span></td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.B[0]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.B[1]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.B[2]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.B[3]) }}%</td>
                </tr>
                <tr>
                    <td><span v-if="DADOS.nivelMeta === 'C'">aqui</span></td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.C[0]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.C[1]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.C[2]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.C[3]) }}%</td>
                </tr>
                <tr>
                    <td><span v-if="DADOS.nivelMeta === 'D'">aqui</span></td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.D[0]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.D[1]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.D[2]) }}%</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.tabelaComissoes.D[3]) }}%</td>
                </tr>
                <tr>
                    <td></td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.vendasPorNivelDesconto['A'] * (DADOS.tabelaComissoes[DADOS.nivelMeta][0] / 100)) }}</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.vendasPorNivelDesconto['B'] * (DADOS.tabelaComissoes[DADOS.nivelMeta][1] / 100)) }}</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.vendasPorNivelDesconto['C'] * (DADOS.tabelaComissoes[DADOS.nivelMeta][2] / 100)) }}</td>
                    <td>{{ formatarNumeroParaPtBr(DADOS.vendasPorNivelDesconto['D'] * (DADOS.tabelaComissoes[DADOS.nivelMeta][3] / 100)) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
table {
    border: 1px solid white;
}
td, th {
    font-size: 1.2rem;
    text-align: right;
    min-width: 6rem;
}
</style>

<script setup>
import { inject } from 'vue';
import { formatarNumeroParaPtBr } from '../utils/utils';
const DADOS = inject('appDados');
</script>