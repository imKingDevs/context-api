
import { createContext } from 'react';
import ComX from './ComX';

const Name = createContext(),
      Greet = createContext(),
      Lname = createContext();

function App() {
  const fname = 'Parth', lname = 'Dudhatra';  
  return (
    <h1>
      <Name.Provider value={fname}>
        <Lname.Provider value={lname}>
          <Greet.Provider value={`I am `}>
            <ComX greeting='Hello! '/>
          </Greet.Provider>
        </Lname.Provider>
      </Name.Provider>
    </h1>
  );
}

export default App;
export {Name, Greet, Lname};

// CreateContext  =>  Provider  =>  Consumer