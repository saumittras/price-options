import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import PriceOptions from "./Components/PriceOprions/PriceOptions";
import LineChart from "./Components/LineChart/LineChart";
// import DaisyNav from "./Components/DaisyNav/DaisyNav";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      {/* <DaisyNav></DaisyNav> */}
    </>
  );
}

export default App;
