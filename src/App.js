
import { useState } from 'react';
import './App.css';
import TicketCard from './components/ticketCard/ticketCard';

function App() {


  const buttonListNumbersOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

  const buttonListNumbersTwo = [1, 2]


  const generateRandomNumbers = () => {

    const numbers = new Set()

    while (numbers.size < 8) {
      const randomNum = Math.floor(Math.random() * 19) + 1;
      numbers.add(randomNum)

    }

    return Array.from(numbers)
  }

  const [showNumber, setShowNumver] = useState([])

  const Pump = () => {
    const arrNumb = generateRandomNumbers()
    setShowNumver(arrNumb)
  }



  return (



    <div className="App">


      <TicketCard
        buttonListNumbersOne={buttonListNumbersOne}
        buttonListNumbersTwo={buttonListNumbersTwo}

      />

      {showNumber.map((i) => (<p key={i}>{i}</p>))}
      <button onClick={() => Pump()}>ну давай посмотрим</button>

    </div>
  );
}

export default App;
