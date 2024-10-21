
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./components/homepage";
import { SignInForm } from "./components/SignInform";
import { CreateForm } from "./components/CreateAccount";
import { ErrorPage } from "./components/ErrorPage";





function App() {
return (
  <Router>
<div className="App">
  <Homepage />
  <SignInForm />
  <CreateForm />
  <ErrorPage />
</div>
</Router>
)
}

export default App;
