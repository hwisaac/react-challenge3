import { Link, Route, Routes, Outlet } from "react-router-dom";
import Chart from "./Chart";
import Coin from "./Coin";
function About() {
  return (
    <>
      <div>
        <Link to='chart'>goChart</Link>
        <Link to='coin'>goCoin</Link>
      </div>
      <Outlet />
      <Routes>
        <Route path='chart' element={<Chart />} />
        <Route path='coin' element={<Coin />} />
      </Routes>
    </>
  );
}
export default About;
