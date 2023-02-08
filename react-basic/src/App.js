import './App.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import EmptyPage from './component/EmptyPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
