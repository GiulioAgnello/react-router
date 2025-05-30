import { BrowserRouter, Routes, Route } from "react-router";

// pages
import HomePage from "./components/pages/Homepage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
