import React, { useEffect, useState } from "react";
import dice from '../images/icon-dice.svg';
import dividerMobile from '../images/pattern-divider-mobile.svg'

function Advice(props) {
  const [advice, setAdvice] = useState({
    id: 0,
    advice: "aperte o dado para gerar um aviso",
  });

  useEffect(() => {
    console.log(advice);
  }, [advice]);

  function Dice(event) {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const Newadvice = data.slip;
        if(Newadvice.id === advice.id){
           return Dice();
        }
        return setAdvice(Newadvice);
      });
  }

  return (
    <div className="advice">
      <h3 className="adviceId">{`ADVICE #${advice.id}`}</h3>
      <h1>{`"${advice.advice}"`}</h1>

        <img id="divider" src={dividerMobile} alt="divider" />

      <button onClick={Dice}><img src={dice} alt="dice" /></button>
    </div>
  );
}

export default Advice;
