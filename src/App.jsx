
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/homepage01/Header";
import BannerAndFeatures from "./components/homepage01/Banner01";
import Footer from "./components/homepage01/Footer";



function App() {
return (
  <Router>
<div className="App">
  <Header />
  <BannerAndFeatures />
  <Footer />
</div>
</Router>
)
}

export default App;
