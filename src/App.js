
import Cards from './component/Cards';
import { Route,Routes } from 'react-router-dom';
import Addmoives from './component/Addmovies';
import Details from './component/Details';
import Header3 from './component/Header3';
import Header1 from './component/Header1';
import Login from './component/Login';

import Signup from './component/Signup';
import { useState } from 'react';
import { createContext,useEffect} from 'react';
const Appstate = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  return (
    <Appstate.Provider value={{login, userName, setLogin, setUserName}} >
      <div className="App">
    <Header3/>
    
     < Routes>
     <Route path="/" element={<Cards/>}/>
     <Route path="/addmovie" element={<Addmoives/>} />
     <Route path="/details/:id" element={<Details/>} />
     <Route path="/login" element={<Login/>} />
     <Route path="/signup" element={<Signup/>} />

    
     </Routes>
     
      </div>
      </Appstate.Provider>
    
  );
}

export default App;
export {Appstate}