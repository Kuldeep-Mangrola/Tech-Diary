import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../src/Componets/Navbar/Navbar'
import MyCarousel from '../src/Componets/Carousel/MyCarousel'
import Machinery from '../src/Componets/Machinery/Machinery'
import Invoice from './Componets/Invoice/Invoice';
import MachineMantain from './Componets/MachineMantainenc/MachineMantain';



function App() {
 

  return (

     <>
     
     <Navbar/>
     <MyCarousel/>
     <Machinery/>
     <Invoice/>
     <MachineMantain/>
     </>
  )
}

export default App
