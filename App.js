
import './App.css';
import Home from './screens/Home';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './componets/NavBar';
import Footer from './componets/Footer';
import Sells from './screens/SellProps';
import Investments from './screens/Investment';
import JoinUs from './screens/JoinUs';
import Contact from './screens/Contact';
import SimuladorInversion from './simulators/SimCredit';
import AdminContent from './Administrator/Admin';
import fileup from './screens/fileup';
import LoginAdmin from './Administrator/LoginAdmin';
import Nosotros from './screens/Nosotros';
import Vendemos from './screens/Vende';
import SendMessage from './screens/SendMessage';


const showToastMessage = () => {
  toast.success('Success Notification !', {
      position: toast.POSITION.TOP_RIGHT
  });
};


function App() {
  return (
   
    
<div className="parallax container-fluid">
<div className="App">
<BrowserRouter>



  <ToastContainer position='center' className="toast-message" />

  
  <Routes>


    <Route exact path="/" Component={Home}/>
    <Route  path="/sells" Component={Sells}/>
    <Route  path="/inversiones" Component={Investments}/>
    <Route  path="/joinus" Component={JoinUs}/>
    <Route  path="/contacto" Component={Contact}/>
    <Route  path="/simulador" Component={SimuladorInversion}/>
    <Route  path="/administrador" Component={LoginAdmin}/>
    <Route  path="/administradorcontent" Component={AdminContent}/>
    <Route  path="/fileup" Component={fileup}/>
    <Route  path="/nosotros" Component={Nosotros}/>
    <Route path="/vendemostupropiedad"  Component={Vendemos} />
    <Route path="/sendmessage"  Component={SendMessage} />


  </Routes>


</BrowserRouter>
</div>
</div>


   
  );
}

export default App;
