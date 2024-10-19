
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./components/homepage";
import { SignInForm } from "./components/SignInform";





function App() {
return (
  <Router>
<div className="App">
  <Homepage />
  <SignInForm />
</div>
</Router>
)
}

export default App;
