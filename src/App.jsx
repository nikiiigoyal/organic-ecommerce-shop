
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/homepage01/Header";

import BannerAndFeatures from "./components/homepage01/Banner01";


function App() {
return (
  <Router>
<div className="App">
  <Header />
  <BannerAndFeatures />
</div>
</Router>
)
}

export default App;
