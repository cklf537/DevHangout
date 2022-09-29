import React from "react";
import {Link} from 'react-router-dom';
import {LEFT_MENU} from '../../store/menu';

const LeftNavigation = () => {

    return <>
        <ul className="relative">
            {LEFT_MENU && LEFT_MENU.map(({display, url}, i)=>{return(
                <li className="relative" key={i}>
                <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" to={url === 'dashboard' ? '/' : url}  data-mdb-ripple="true" data-mdb-ripple-color="dark">{display}</Link>
            </li>
            )}) }
        </ul>
    </>
}

export default LeftNavigation;