import './App.css';
import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="*" element={<EmptyPage />} />
          <Route path="/create-word" element={<CreateWord />} />
          <Route path="/create-day" element={<CreateDay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
