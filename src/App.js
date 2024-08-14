import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Crops from './Components/Crops';
import About from './Components/About';
import Contact from './Components/Contact';
import RegisterForm from './Components/RegisterForm';
import GetStarted from './Components/GetStarted';
import AgriExperts from './Components/AgriExperts';
import Fertilizer from './Components/Fertilizer';
import SchemesPage from './Components/Schemes';
import Login from './Components/Login';
import { AuthProvider } from './AuthContext'; // Import the Auth provider
import Mission from './Components/Mission';
import Soil from './Components/Soil';
import Products from './Components/Product';
import Home1 from './Components/Home1';
import UserDetails from './Components/UserDetails';
import SoilInfo from './Components/SoilInfo';
import AdminSchemePage from './Components/AdminSchemepage';
import AdminProducts from './Components/AdminProducts';
import Payment from './Components/Payment';
import ComplaintForm from './Components/ComplaintForm';

function ConditionalNavbar() {
  const location = useLocation();
  if (location.pathname === '/login' || location.pathname === '/register'||location.pathname==='/home1'||location.pathname==='/admin/product-details'||
      location.pathname==='/admin/user-details'||location.pathname==='/admin/order-details'||location.pathname==='/admin/schemes'||location.pathname==='/admin/crops-info'||location.pathname==='/admin/soil-info') {
    return null;
  }
  return <Navbar />;
}



function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <ConditionalNavbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home1" element={<Home1/>} />
              <Route path="/crops" element={<Crops />} />
              <Route path="/agri" element={<AgriExperts />} />
              <Route path="/soil" element={<Soil/>} />
              <Route path="/schemes" element={<SchemesPage />} />
              <Route path="/products" element={<Products/>} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/get-started" element={<GetStarted />} />
              <Route path="/fertilizer" element={<Fertilizer />} />
              <Route path="/mission" element={<Mission/>} />
              <Route path="/admin/user-details" element={<UserDetails/>} />
              <Route path="/admin/soil-info" element={<SoilInfo/>} />
              <Route path="/admin/schemes" element={<AdminSchemePage/>} />
              <Route path="/admin/product-details" element={<AdminProducts/>} />
              <Route path="/payment" element={<Payment/>} />
              <Route path="/complaint" element={<ComplaintForm/>} />

            </Routes>
          </main>
          
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
