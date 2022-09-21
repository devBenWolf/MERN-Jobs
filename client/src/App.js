import Layout from "./Layout/Layout";
import Landing from "./pages/Landing";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Dashboard, Error, Register } from "./pages";

function App() {
  return (
    <BrowserRouter>
    <Layout>

      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />    
          <Route path="/landing" element={<Landing />} />  
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
