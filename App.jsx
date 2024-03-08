import "./App.css";
import { LoginSignup } from "./login-signup";
import video from "./assets/background.mp4";

function App() {
  return (
    <div>
      <video autoPlay loop muted playsInline className="backVid">
        <source src={video} type="video/mp4" />
      </video>
      <LoginSignup />
    </div>
  );
}

export default App;
