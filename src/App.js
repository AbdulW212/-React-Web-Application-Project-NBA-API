import './App.css';
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Scorer from "./pages/Scorer"; 
import FieldGoal from "./pages/FieldGoal";


function App() {
  return (
    <div className="App">
       <Nav />
       <div className="appImage1"><img src="https://tse1.mm.bing.net/th?id=OIP.0VRU8L7HY_6YCqPeh6u85AHaEK&pid=Api&P=0&h=220" className="image1"/> </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/scorer" element={<Scorer />} /> 
        <Route path="/fieldGoal/:player_name" element={<FieldGoal />} />
      </Routes>
      <Nav />
    </div>
  );
}

export default App;
