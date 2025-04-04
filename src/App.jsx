import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import ContactUs from "./pages/contactus";
import UserDashboard from "./pages/usersdashboard";
import Shop from "./pages/shop";
import Sidebar from "./component/Sidebar"; // Common Navbar
import Footer from "./component/Footer"; // Common Footer

// Authentication Pages
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <Router>
      <Sidebar /> {/* Common Navbar */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/shop" element={<Shop />} />
        
        {/* User Dashboard */}
        <Route path="/dashboard" element={<UserDashboard />} />

        {/* Authentication Routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <Footer /> {/* Common Footer */}
    </Router>
  );
}

export default App;
