import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
