import { Container } from "@/app/components/Container";

const Questao1 = () => {
    let i = 13;
    let soma = 0;
    let k = 0;

    while (k < i) {
        k = k + 1;
        soma = soma + k;
    }
    return (
        <section className="">
            <Container>
                <h1 className="text-2xl p-5 ml-5">Questão 1</h1>

                <p>Observe o trecho de código abaixo:</p>
                <div>
                    <div className="bg-slate-700 p-1 w-44 rounded flex flex-col items-center">
                        <p>int INDICE = 13, SOMA = 0, K = 0;</p>
                        <p>enquanto K </p>
                        <p>K = K + 1;</p>
                        <p>SOMA = SOMA + K;</p>
                    </div>
                </div>
                <p>Ao final do processamento, qual será o valor da variável SOMA?</p>
                <div className="bg-slate-800  p-4 flex flex-col items-center rounded-md my-5">
                    <h2 className="my-2 text-xl">Solução da questão</h2>
                    <div>
                        <p>Resultado: <span className="text-sky-500 text-2xl">{soma}</span></p>
                    </div>
                </div>
            </Container >
        </section>
    )
}

export default Questao1;