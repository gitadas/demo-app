import logo from './logo.svg';
import './App.css';
import TextAnimation from "./components/TextAnimation/TextAnimation.js"
import GreetingsArray from "./components/GreetingsArray/GreetingsArray.js"
import FlowerImage from './assets/flower.jpg';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TextAnimation Community Portal />   
        <GreetingsArray />  
        <div>   
          <img src={FlowerImage} alt="tulip" style={{ width: '400px', height:'400px' }}/>
        </div>            
      </header>
    </div>
  );
}

