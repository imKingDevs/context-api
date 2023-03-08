
import { createContext } from 'react';
import './App.css';
import ComA from './ComA';

const Name = createContext(),
      Lname = createContext(),
      Greet = createContext();

function App() {
  const fname = 'Parth', lname = 'Dudhatra';  
  return (
    <h1>
      <Name.Provider value={fname}>
        <Lname.Provider value={lname}>
          <Greet.Provider value={'Hello! '}>
            <ComA />
          </Greet.Provider>
        </Lname.Provider>
      </Name.Provider>
    </h1>
  );
}

export default App;
export {Name, Lname, Greet};

// CreateContext  =>  Provider  =>  Consumer