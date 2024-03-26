import style from "./Calculations.module.css"
import Menu from './components/Menu'
import { useState } from "react"
import { useEffect } from "react"

export const Calculations = () => {
    const [numero1, setNumero1] = useState()
    const [numero2, setNumero2] = useState()
    const [respSoma, setRespSoma] = useState()
    const [respSubtracao, setRespSubtracao] = useState()
    const [respMultiplicacao, setRespMultiplicacao] = useState()
    const [respDivisao, setRespDivisao] = useState()

    //useEffect(() => {
     //   if(numero1 !== undefined && numero2 !== undefined){
      //      setRespSoma(parseFloat(numero1) + parseFloat(numero2))
      //      setRespSubtracao(parseFloat(numero1) - parseFloat(numero2))
      //      setRespMultiplicacao(parseFloat(numero1) * parseFloat(numero2))
      //      setRespDivisao(parseFloat(numero1) / parseFloat(numero1))
    //    }

   // }, [numero1, numero2])

    //const handleCalc = () => {
      //  const num1 = parseFloat(numero1)
     //   const num2 = parseFloat(numero2)

   //     if(!isNaN(num1) && !isNaN(num2)){
     //       setRespSoma(num1 + num2);
     //       setRespDivisao(num1 / num2);
     //       setRespMultiplicacao(num1 * num2);
      //      setRespSubtracao(num1 - num2);
     //   }
      //  else{
      //      setRespSoma("Insira valores válidos!");
      //      setRespDivisao("Insira valores válidos!");
      //      setRespSubtracao("Insira valores válidos!");
      //      setRespMultiplicacao("Insira valores válidos!");
      //  }
   // }

   const handleSoma = () => setRespSoma(parseFloat(numero1) + parseFloat(numero2))
   const handleSubtracao = () => setRespSubtracao(parseFloat(numero1) - parseFloat(numero2))
   const handleMultiplicacao = () => setRespMultiplicacao(parseFloat(numero1) * parseFloat(numero2))
   const handleDivisao = () => setRespDivisao(parseFloat(numero1) / parseFloat(numero2))
    return(
        <div className={style.sectionCalc}>
            <Menu/>
            <div className={style.wrapInputsCalc}>
                <h1>Cálculos</h1>
                <input 
                className={style.inputCalc}
                type="text" 
                placeholder="Digite o primeiro número: " 
                value={numero1}
                onChange={(event) => setNumero1(event.target.value)}
                />

                <input
                className={style.inputCalc} 
                type="text" 
                placeholder="Digite o segundo número: " 
                value={numero2}
                onChange={(event) => setNumero2(event.target.value)}
                />
            </div>
            <div>
                <div className={style.wrapInputsCalc}>
                    <div className={style.wrapEach}>
                        <h1>Soma</h1>
                        <button onClick={handleSoma}>Calcular</button>
                        {!isNaN(respSoma) && <p>{respSoma.toFixed(2)}</p>}
                    </div>
                    <div  className={style.wrapEach}>
                        <h1>Subtração</h1>
                        <button onClick={handleSubtracao}>Calcular</button>
                        {!isNaN(respSubtracao) && <p>{respSubtracao.toFixed(2)}</p>}
                    </div>
                    <div  className={style.wrapEach}>
                        <h1>Multiplicação</h1>
                        <button onClick={handleMultiplicacao}>Calcular</button>
                        {!isNaN(respMultiplicacao) && <p>{respMultiplicacao.toFixed(2)}</p>}
                    </div>
                    <div  className={style.wrapEach}>
                        <h1>Divisão</h1>
                        <button onClick={handleDivisao}>Calcular</button>
                        {!isNaN(respDivisao) && <p>{respDivisao.toFixed(2)}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}