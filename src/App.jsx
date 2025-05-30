import { BrowserRouter, Routes, Route } from "react-router";

// pages
import HomePage from "./components/pages/homepage";
import DefaultLayout from "./components/Layout/Defaultlayout";
import Male from "./components/pages/Male";
import Female from "./components/pages/Female";

// app
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/male" element={<Male />} />
            <Route path="/Female" element={<Female />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
