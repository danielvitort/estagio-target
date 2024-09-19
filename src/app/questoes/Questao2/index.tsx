"use client"

import { Container } from "@/app/components/Container"
import { useState } from "react";

const Questao2 = () => {
    const [inputNumber, setInputNumber] = useState<number | string>('');
    const [message, setMessage] = useState<string>('');

    // Função para verificar se o número pertence à sequência de Fibonacci
    const isFibonacci = (n: number): string => {
        let fibSequence = [0, 1];

        // Gerando a sequência até que o número seja atingido ou ultrapassado
        while (fibSequence[fibSequence.length - 1] < n) {
            let nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
            fibSequence.push(nextFib);
        }

        // Verificando se o número informado pertence à sequência
        return fibSequence.includes(n)
            ? `O número ${n} pertence à sequência de Fibonacci.`
            : `O número ${n} não pertence à sequência de Fibonacci.`;
    };

    // Função para lidar com a submissão do formulário
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const num = typeof inputNumber === 'string' ? parseInt(inputNumber, 10) : inputNumber;
        if (isNaN(num)) {
            setMessage('Por favor, insira um número válido.');
        } else {
            setMessage(isFibonacci(num));
        }
    };

    return (
        <section className="">
            <Container>
                <h1 className="text-2xl p-5 ml-5">Questão 2</h1>
                <p>Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores
                    anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde,
                    informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado
                    pertence ou não a sequência.</p>

                <p>IMPORTANTE:
                    Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no
                    código;</p>


                <div className="bg-slate-800  p-4 flex flex-col items-center rounded-md my-5">
                    <h2 className="my-2 text-xl">Solução da questão</h2>
                    <div>
                        <h1>Verificador de Fibonacci</h1>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="number"
                                value={inputNumber}
                                onChange={(e) => setInputNumber(e.target.value)}
                                placeholder="Digite um número"
                                className="rounded p-2 text-xl text-slate-950 my-4"
                            />
                            <button type="submit" className="flex gap-3 items-center border-2 border-slate-400 text-slate-200 px-5 py-1 rounded-3xl hover:border-white hover:bg-sky-700 hover:text-white">Verificar</button>
                        </form>
                        {message && <p>{message}</p>}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Questao2;