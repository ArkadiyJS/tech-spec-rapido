

import { useState } from 'react';
import './App.css';
import TicketCard from './components/ticketCard/ticketCard';

function App() {


  const buttonListNumbersOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

  const buttonListNumbersTwo = [1, 2]

  const [selectedFirstNumbers, setSelectedFirstNumbers] = useState([]);
  const [selectedTwoNumbers, setSelectedTwoNumbers] = useState([]);

  const generateEightRandomNumbers = () => {

    const numbers = new Set()

    while (numbers.size < 8) {
      const randomNum = Math.floor(Math.random() * 19) + 1;
      numbers.add(randomNum)

    }

    return Array.from(numbers)
  }

  const generateOneRandomNumbers = () => {
    const randomNum = Math.floor(Math.random() * 2) + 1;
    return randomNum
  }


  const magicWand = () => {
    const arrNumbFiledOne = generateEightRandomNumbers()
    const numbFieldTwo = generateOneRandomNumbers()
    setSelectedFirstNumbers([...arrNumbFiledOne]);
    setSelectedTwoNumbers([numbFieldTwo]);
  }





  const handleClick = (number) => {
    if (selectedFirstNumbers.length < 8 && !selectedFirstNumbers.includes(number)) {
      setSelectedFirstNumbers([...selectedFirstNumbers, number]);
    }
  };



  const handleClickTwo = (number) => {
    if (selectedTwoNumbers.length < 1 && !selectedTwoNumbers.includes(number)) {
      setSelectedTwoNumbers([...selectedTwoNumbers, number]);
    }
  };




  return (



    <div className="App">


      <TicketCard
        buttonListNumbersOne={buttonListNumbersOne}
        buttonListNumbersTwo={buttonListNumbersTwo}

        handleClick={handleClick}
        selectedFirstNumbers={selectedFirstNumbers}

        handleClickTwo={handleClickTwo}
        selectedTwoNumbers={selectedTwoNumbers}

        magicWand={magicWand}

      />
      <button onClick={() => magicWand()}></button>


    </div>
  );
}

export default App;
