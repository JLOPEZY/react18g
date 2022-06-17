import { useState } from 'react';

import './App.css';

// Components
import Title from './components/Title';
import FullName from './components/fullName';


function App() {
  //local state
  //[0] = valor del state
  //[1] = función que actualiza el state
  //si `useState`recibe un argumento,este será el valor incial del estado
  //si no el estado es undefined
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  // ARGUMENTO 1: CALLBACK
  // ARGUMENTO 2: nada, [], [count]
  // Caso vacío: el callback del useEffect se ejecuta cada que algo cambie (estado)
  // Caso []: el callback del useEffect se ejecuta solo la primera vez que carga el componente
  // Caso [state]:  el callback del useEffect se ejecuta la primera vez y cada que se actualice el estado que se incluye
  // useEffect(() => {
  //   console.log("ME EJECUTO LA PRIMERA VEZ QUE EL COMPONENTE SE CARGA");
  // }, []);

  // useEffect(() => {
  //   console.log(
  //     "ME EJECUTO LA PRIMERA VEZ QUE EL COMPONENTE SE CARGA Y CADA VEZ QUE EL ESTADO SE ACTUALIZA"
  //   );
  // }, [count]);
  // ----------------------------------------------
  // console.log(count, 'COUNT')
  // console.log(setCount, 'SET_COUNT')
  // useEffect(() => {
  //   console.log(
  //     "ME EJECUTO LA PRIMERA VEZ Y SIEMPRE QUE HAYA UNA ACTUALIZACIÓN DEL COMPONENTE"
  //   );
  // });


  const handleClick = (increase) => {
    let newCount = count;
    if (increase) {
      newCount = newCount + 1;
    } else {
      newCount = newCount - 1;
    }
    setCount(newCount);

  };

  const isMultiple = count % 5 === 0 && count !== 0 ? true : false;
  const countType = isMultiple ? "Es multiplo de 5" : "No es multiplo de 5";
  const countClass = isMultiple ? "active" : "inactivo";


  // const handleClick = () => {
  //   setCount(count + 1)

  // } 

  // const handleClick2 = () => {
  //   setCount(count - 1)

  // } 
  const squareClass = isOn ? "square-on" : "square-off"
  const squareText = isOn ? "ON" : "OFF"
  return (
    <div className="App">
      <header className="App-header">

        <Title text="Aaron"></Title>

        <FullName firstName="Yusef" lastName="Lopez"></FullName>

        <p className={countClass}>
          Counter: {count}, {countType}
        </p>

        <button onClick={() => handleClick(true)}>Increase</button>

        {/* <button onClick={handleClick}>Increase</button>
        <button onClick={handleClick2}>Decrease</button> */}
        {/* TEMPLATE INTERPOLACION */}
        {/* <div className={`square ${isOn ? "square-on" : "square-off"}`}>{isOn ? "ON" : "OFF"}
        </div>   */}
        <div className={`square ${squareClass}`}
             onMouseOver={() => setIsOn(!isOn)}
        >
          {squareText}
        </div>

       
        <div
          style={{
            display: "flex",
          }}
        >
          <button onClick={() => setIsOn(!isOn)}>Interruptor</button>
        

          {/* <button onClick={() => setIsOn(true)}>ON</button>
          <button onClick={() => setIsOn(false)}>OFF</button> */}
        </div>
      </header>
    </div>
  );
}

export default App;
