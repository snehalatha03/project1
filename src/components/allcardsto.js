import '../style.css'
import Navbar from '../components/Navbar'
import Ticket from '../components/ticket';
 export default function Allcardsto(){
    return(
        <>
        <div className="appfile">
        <Navbar/>
        <div className='allcardsin'>
        <Ticket/>
        </div>
        </div>
        </>
      );
    }
    
 