import image from '../images/logo.jpg'
import '../style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge,faSheetPlastic,faIdBadge,faGear,faTicket,faBars} from '@fortawesome/free-solid-svg-icons'

export default function Navbar(){
    function Mousehandle(){
        document.getElementsByTagName("h2").style.visiblity="visible"
    }
    return(
       <nav>
        <div className="navbar">
            <img className="nav-image" src={image} alt="not available"/>
            <h2 className="logo">Logo</h2>
        </div>
        <div className='navbar1'>
        <FontAwesomeIcon icon={faBars} className='icon' id="bars" />
        <h2>Hide</h2>
        </div>
        <div className='navbar1'>
        <FontAwesomeIcon icon={faGauge} className='icon' onMouseEnter={Mousehandle}/>
        <h2>Dashboard</h2>
        </div>
        <div className='navbar1'>
        <FontAwesomeIcon icon={faSheetPlastic}className='icon' />
        <h2>Projects</h2>
        </div>
        <div className='navbar1'>
        <FontAwesomeIcon icon={faIdBadge} className='icon'/>
        <h2>Earnings</h2>
        </div>
        <div className='navbar1'>
        <FontAwesomeIcon icon={faGear} className='icon'/>
        <h2>Profile</h2>
        </div>
        <h2 id="support">Support</h2>
        <div className='navbar1'>
        <FontAwesomeIcon icon={faTicket} className='icon'/>
        <h2>Tickets</h2>
        </div>
       </nav>
    )
}