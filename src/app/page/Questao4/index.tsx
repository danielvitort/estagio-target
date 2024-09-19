"use client"

import { Container } from "@/app/components/Container"
import { useState } from "react";

type FaturamentoPorEstado = {
    [key: string]: number;
};

const Questao4 = () => {
    const faturamentoPorEstado: FaturamentoPorEstado = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    };

    const [percentuais, setPercentuais] = useState<FaturamentoPorEstado | null>(null);

    // Função para calcular o percentual de representação de cada estado
    const calcularPercentuais = () => {
        // Somar o valor total de faturamento
        const totalFaturamento = Object.values(faturamentoPorEstado).reduce(
            (acc, valor) => acc + valor,
            0
        );

        // Calcular o percentual de cada estado
        const percentuaisCalculados: FaturamentoPorEstado = {};
        for (const estado in faturamentoPorEstado) {
            percentuaisCalculados[estado] =
                (faturamentoPorEstado[estado] / totalFaturamento) * 100;
        }

        // Atualizar o estado com os percentuais calculados
        setPercentuais(percentuaisCalculados);
    };
    return (
        <section>
            <Container>
                <h1 className="text-2xl p-5 ml-5">Questão 4</h1>
                <p>Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:</p>
                <ul className="list-disc ml-10">
                    <li> SP - R$67.836,43</li>
                    <li> RJ - R$36.678,66</li>
                    <li> MG - R$29.229,88</li>
                    <li> ES - R$27.165,48</li>
                    <li> Outros - R$19.849,53</li>
                </ul>
                <p> Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve
                    dentro do valor total mensal da distribuidora.</p>
                <div className="bg-slate-800 p-4 flex flex-col items-center rounded-md my-5">
                    <h2 className="my-2 text-xl">Solução da questão</h2>
                    <div>
                        <h1>Percentual de Representação dos Estados</h1>
                        <button
                            onClick={calcularPercentuais}
                            className="flex gap-3 items-center border-2 border-slate-400 text-slate-200 px-5 py-1 my-4 rounded-3xl hover:border-white hover:bg-sky-700 hover:text-white"
                        >
                            Calcular Percentuais
                        </button>

                        {percentuais && (
                            <div>
                                <h2>Resultados:</h2>
                                <ul className="text-sky-500 text-2xl">
                                    {Object.keys(percentuais).map((estado) => (
                                        <li key={estado}>
                                            {estado}: {percentuais[estado].toFixed(2)}%
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Questao4;