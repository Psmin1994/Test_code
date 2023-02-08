import './App.css';
import Hello from './component/Hello';

function App() {
  return (
    <div className="App">
      <Hello age={10}></Hello>
      <Hello age={20}></Hello>
      <Hello age={30}></Hello>
    </div>
  );
}

export default App;
