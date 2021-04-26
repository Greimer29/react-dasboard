import {NavLink} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

const Sidebar = function(){
    return(
        <div className="sidebar">
            <ul>
                <li>
                    <NavLink to="/" exact activeClassName="active" className="text-dark rounded py-2 w-100 d-line-block px-3"> 
                        <FaIcons.FaHome className="me-2"/> 
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sales" exact activeClassName="active" className="text-dark rounded py-2 w-100 d-line-block px-3">
                        <FaIcons.FaRegChartBar className="me-2"/>
                        Ventas
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clients" exact activeClassName="active" className="text-dark rounded py-2 w-100 d-line-block px-3">
                        <FaIcons.FaUserFriends className="me-2"/> 
                        Clientes
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;