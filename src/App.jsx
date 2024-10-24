
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Layout } from "./components/layout/layout";

import { Faq } from "./components/pages/Faq's";
import { SignInForm } from "./components/pages/SignInform";
import { CreateForm } from "./components/pages/CreateAccount";
import { ErrorPage } from "./components/pages/ErrorPage";
import Homepage from "./components/pages/homepage/sections";
import { Layout } from "./components/layout/layout";

// import Homepage from "./components/pages/homepage/sections";

function App() {
return (
  <BrowserRouter>
  
  {/* <Layout> */}
    <Routes>
      {/* public routes */}
      
      <Route path="/" element={<Layout />}>
   <Route index element={<Homepage />}></Route>
   <Route path="/signin" element={<SignInForm />}></Route>
   <Route path="/register" element={<CreateForm />}></Route>
   <Route path="/faq" element= {<Faq />}></Route>
   <Route path="*" element= {<ErrorPage />}></Route>
   </Route>
  </Routes>
  {/* </Layout> */}
  </BrowserRouter>
  

)
}

export default App;
