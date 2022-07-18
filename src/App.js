import { useState, useEffect } from 'react';
import './App.css';
import Contador from './Components/Contador/Contador';

function App() {

  const [Days, setDays] = useState();
  const [Hours, setHours] = useState();
  const [Minutes, setMinutes] = useState();
  const [Seconds, setSeconds] = useState();


  let interval;

  const startTimer = () => {
    const CuentaRegresiva = new Date("June 30, 2023").getTime();

    interval = setInterval(() => {
      const hoy = new Date().getTime()

      const distancia = CuentaRegresiva - hoy;

      const days = Math.floor(distancia / (24 * 60 * 60 * 1000))
      const hours = Math.floor(distancia % ((24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
      const minutes = Math.floor(distancia % (60 * 60 * 1000) / (1000 * 60))
      const seconds = Math.floor(distancia % (60 * 1000) / 1000)

      if (distancia < 0){
        clearInterval(interval)
      }else{
        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)

      }
    });

  };
  useEffect(()=>{
    startTimer()
  }, [])
  return (
    <div className="App">
      <Contador Days={Days}  Hours={Hours} Minutes={Minutes} Seconds={Seconds}/>
    </div>

  );
}

export default App;
