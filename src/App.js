
import './App.css';
import TicketCard from './components/ticketCard/ticketCard';

function App() {


  const buttonListNumbersOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

  const buttonListNumbersTwo = [1, 2]




  return (



    <div className="App">


      <TicketCard
        buttonListNumbersOne={buttonListNumbersOne}
        buttonListNumbersTwo={buttonListNumbersTwo}

      />




    </div>
  );
}

export default App;
