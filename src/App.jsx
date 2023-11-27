import './App.css';
import "./style/landingPage.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TrendingGame from "./components/pages/TrendingGame";
import BestGame from "./components/pages/BestGame";
import AllGame from './components/pages/AllGame';
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";


export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home />} />
               <Route path="all-game" element={<AllGame />} />
               <Route path="trending" element={<TrendingGame />} />
               <Route path="best" element={<BestGame />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}