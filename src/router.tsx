// arquivo de rotas
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/list" element={<div>Lista</div>} />
      </Routes>
    </BrowserRouter>
  );
};
