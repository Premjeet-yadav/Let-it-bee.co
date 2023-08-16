import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { ProductDetails } from './Pages/ProductDetails';
import { Products } from './Pages/Products';
import Address from './Pages/address/Address';
import ThankYou from './Pages/address/ThankYou';
import  {AddToCart}  from './Pages/addtocart/AddToCart';
import { Allroutes } from './Routes/Allroutes';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Allroutes/>
   {/* <Address/> */}
   {/* <AddToCart/> */}
   <Footer/>
    </div>
  );
}
export default App;
