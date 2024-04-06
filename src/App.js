import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { Content } from './content';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      <Content/>
      </header>
    </div>
  );
}

export default App;
