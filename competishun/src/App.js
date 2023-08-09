import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home/Home';
import { MainRouter } from './Components/Router/MainRouter';
import Login from './Components/Authentication/Login';

function App() {
  return (
    <div className="App">
      
     <Home/>
     
     <MainRouter/>
     
    </div>
  );
}

export default App;
