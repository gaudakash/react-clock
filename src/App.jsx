import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Clocktitle from "./Component/Clocktitle";
import ClockSlogan from "./Component/ClockSlogan";
import Clocksamay from "./Component/Clocksamay";

function App() {
  return (
    <center>
      <Clocktitle />
      <ClockSlogan />
      <Clocksamay />
    </center>
  );
}

export default App;
