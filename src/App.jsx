import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './Pages/HomeScreen'; 
import MyOrder from './Pages/MyOrderPage';
import MyAccount from './Pages/MyAccount';
import MyOrderPopup from './Pages/MyOrderPopup';
import MyOrderScreen from "./Pages/MyOrder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="*" element={<HomeScreen />} /> 
        <Route path="/my-order" element={<MyOrder />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/cart" element={<MyOrderPopup/>} />
        <Route path="/EmptyBox" element={<MyOrderScreen/>} />
      </Routes>
    </Router>
  );
}

export default App;
