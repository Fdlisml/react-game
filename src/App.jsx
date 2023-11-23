import './App.css';
import BestGame from "./components/BestGame";
import Intro from "./components/Intro";
import TrendingGame from "./components/TrendingGame";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/landingPage.css";

export default function App() {
   return (
      <BrowserRouter>
         <Routes> 
            <Route path="/" element={<Intro/>} />
            <Route path="/trending" element={<TrendingGame/>} />
            <Route path="/best" element={<BestGame/>} />
         </Routes>
      </BrowserRouter>
   );
}