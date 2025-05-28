import logo from './logo.svg';
import './App.css';
import Mainpage from './component/mainpage'; 
import {Routes,Route} from 'react-router-dom';
import { Mealinfo } from './component/mealinfo';


function App() {
  return(
    //<Mainpage/>
    <Routes>
    <Route path='/' element={<Mainpage/>}/>
    <Route path='/:mealid' element={<Mealinfo/>}/>
    </Routes>

  );
}

export default App;
