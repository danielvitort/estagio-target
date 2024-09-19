"use client"

import { Container } from "@/app/components/Container";
import { useState } from "react";

type FaturamentoDia = {
    dia: number;
    valor: number;
};
const faturamentoData: FaturamentoDia[] = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]

];

const Questao3 = () => {
    const [menorValor, setMenorValor] = useState<number | null>(null);
    const [maiorValor, setMaiorValor] = useState<number | null>(null);
    const [diasAcimaMedia, setDiasAcimaMedia] = useState<number | null>(null);

    // Função para calcular o menor, maior e os dias acima da média
    const calcularFaturamento = (data: FaturamentoDia[]) => {
        // Filtrar os dias com faturamento maior que zero
        const valores = data.filter(dia => dia.valor > 0).map(dia => dia.valor);

        // Encontrar o menor e o maior valor
        const menor = Math.min(...valores);
        const maior = Math.max(...valores);

        // Calcular a média
        const soma = valores.reduce((acc, val) => acc + val, 0);
        const media = soma / valores.length;

        // Contar os dias com faturamento acima da média
        const diasAcima = data.filter(dia => dia.valor > media).length;

        // Atualizar o estado
        setMenorValor(menor);
        setMaiorValor(maior);
        setDiasAcimaMedia(diasAcima);
    };

    return (
        <section>
            <Container>
                <h1 className="text-2xl p-5 ml-5">Questão 3</h1>
                <p>Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que
                    desejar, que calcule e retorne:   </p>
                <ul className="list-disc ml-5">
                    <li>O menor valor de faturamento ocorrido em um dia do mês;</li>
                    <li>O maior valor de faturamento ocorrido em um dia do mês;</li>
                    <li>Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.</li>
                </ul>

                <p>IMPORTANTE:</p>
                <ol>
                    <li> a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;</li>
                    <li> b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no
                        cálculo da média;</li>
                </ol>

                <div className="bg-slate-800  p-4 flex flex-col items-center rounded-md my-5">
                    <h2 className="my-2 text-xl">Solução da questão</h2>
                    <div>
                        <h1>Faturamento Diário</h1>
                        <button
                            onClick={() => calcularFaturamento(faturamentoData)}
                            className="flex gap-3 items-center border-2 border-slate-400 text-slate-200 px-5 py-1 my-4 rounded-3xl hover:border-white hover:bg-sky-700 hover:text-white"
                        >
                            Calcular Faturamento
                        </button>
                        {menorValor !== null && <p>Menor valor de faturamento: <span className="text-sky-500 text-2xl" >{menorValor}</span></p>}
                        {maiorValor !== null && <p>Maior valor de faturamento: <span className="text-sky-500 text-2xl" >{maiorValor}</span></p>}
                        {diasAcimaMedia !== null && (
                            <p>Número de dias com faturamento acima da média: <span className="text-sky-500 text-2xl" >{diasAcimaMedia}</span></p>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Questao3;