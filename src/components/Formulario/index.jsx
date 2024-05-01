import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    //mount
    //update
    //onmount

    useEffect(() => { //este userEffect é apenas para quando o componente for inicializado/montado
        console.log("o componente iniciou");

        return () =>{ //executar uma função quando o componente for encerrado ou desmontado
            console.log("o componente finalizou")
        }

    }, [])

    useEffect(() => {
        console.log("o estado nome mudou");
    }, [nome])

    useEffect(() => {
        console.log("matéria A mudou para:" + materiaA)
    }, [materiaA, materiaB, materiaC])

    const alteraNome = (evento) => {
        // console.log(evento.target.value)
        // setNome(evento.target.value)
        setNome(estadoAnterior => {
            //console.log(estadoAnterior);

            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma =  materiaA + materiaB + materiaC;
        const media = soma / 3;

        // console.log(soma)
        // console.log(media)

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, você não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota materia A" onChange={({target}) => setMateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="Nota materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;