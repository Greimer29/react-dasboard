import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

const Sidebar = function(){
    return(
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/" className="text-dark"> 
                        <FaIcons.FaHome className="me-2"/> 
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to="/sales" className="text-dark">
                        <FaIcons.FaRegChartBar className="me-2"/>
                        Ventas
                    </Link>
                </li>
                <li>
                    <Link to="/clients" className="text-dark">
                        <FaIcons.FaUserFriends className="me-2"/> 
                        Clientes
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;