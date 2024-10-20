
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./components/homepage";
import { SignInForm } from "./components/SignInform";
import { CreateForm } from "./components/CreateAccount";





function App() {
return (
  <Router>
<div className="App">
  <Homepage />
  <SignInForm />
  <CreateForm />
</div>
</Router>
)
}

export default App;
