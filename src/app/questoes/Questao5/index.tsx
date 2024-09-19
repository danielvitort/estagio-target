"use client"

import { Container } from "@/app/components/Container"
import { useState } from "react";

const Questao5 = () => {
    const [inputString, setInputString] = useState<string>('');
    const [reversedString, setReversedString] = useState<string | null>(null);

    // Função para inverter a string manualmente
    const inverterString = (str: string) => {
        let inverted = '';
        // Percorre a string de trás para frente e monta a string invertida
        for (let i = str.length - 1; i >= 0; i--) {
            inverted += str[i];
        }
        return inverted;
    };

    // Handle para o submit do formulário
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setReversedString(inverterString(inputString));
    };

    return (
        <section className="">
            <Container>
                <h1 className="text-2xl p-5 ml-5">Questão 5</h1>
                <p>Escreva um programa que inverta os caracteres de um string.</p>

                <p>IMPORTANTE:</p>
                <ul>
                    <li>a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;</li>
                    <li>b) Evite usar funções prontas, como, por exemplo, reverse;</li>
                </ul>
                <div className="bg-slate-800  p-4 flex flex-col items-center rounded-md my-5">
                    <h2 className="my-2 text-xl">Solução da questão</h2>
                    <div>
                        <h1>Inverter String</h1>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={inputString}
                                onChange={(e) => setInputString(e.target.value)}
                                placeholder="Digite a string a ser invertida"
                                className="rounded p-2 text-xl text-slate-950 my-4"
                            />
                            <button
                                type="submit"
                                className="flex gap-3 items-center border-2 border-slate-400 text-slate-200 px-5 py-1 rounded-3xl hover:border-white hover:bg-sky-700 hover:text-white"
                            >
                                Inverter
                            </button>
                        </form>
                        {reversedString !== null && (
                            <p>String invertida: <span className="text-sky-500 text-2xl">{reversedString}</span></p>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Questao5;