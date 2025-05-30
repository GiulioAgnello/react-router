import { BrowserRouter, Routes, Route } from "react-router";

// pages
import HomePage from "./components/pages/homepage";
import DefaultLayout from "./components/Layout/Defaultlayout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
