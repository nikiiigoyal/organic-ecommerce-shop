
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./components/homepage";
import { SignInForm } from "./components/SignInform";
import { CreateForm } from "./components/CreateAccount";
import { ErrorPage } from "./components/ErrorPage";
import { Faq } from "./components/Faq's";
import { Contact } from "./components/Contact";





function App() {
return (
  <Router>
<div className="App">
  <Homepage />
  <SignInForm />
  <CreateForm />
  <ErrorPage />
  <Faq />
  <Contact />
</div>
</Router>
)
}

export default App;
