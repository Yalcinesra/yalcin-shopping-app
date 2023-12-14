import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";



import Home from "../pages/Home";
import Basket from "../pages/Basket";
import NotFound from "../pages/NotFound";
const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
       
          <Route path="" element={<Home/>} />
       

        <Route path="/basket" element={<Basket/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;