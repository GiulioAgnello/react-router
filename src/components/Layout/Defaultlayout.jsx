import { Outlet } from "react-router";
import Header from "../variable/Header";

export default function DefaultLayout() {
  return;
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>;
}
