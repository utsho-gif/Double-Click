import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
