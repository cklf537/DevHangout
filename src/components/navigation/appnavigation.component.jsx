import { getByDisplayValue } from "@testing-library/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom';
import { addMenu } from "../../reducers/menu.reducer";

const AppNavigation = () => {
    const { menu } = useSelector(state => state);
    const [menus, setMenues] = useState(menu);
    const [authToken, setAuthtoken] = useState(null)
    useEffect(() => {
        const AppMenu = authToken === null ? menus.filter(item => {
            return !item.display.includes('Profile');
        }) : menus.filter(item => {
            return item.display.includes('Profile');
        });
        setMenues(AppMenu)
    }, [authToken]);
    return (<div>
        <>
            <section className="flex  felx-row w-full font-sans items-center">
                <section className="basis-1/6 place-content-left flex text-3xl italic font-bold text-sky-600 ">
                    <Link to={`/`}><h1>Dev<span className="text-slate-600 font-normal text-md">hangout</span></h1></Link>
                </section>
                <section className="flex-auto place-content-center ">
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-slate-50 border  w-3/4 border-slate-200 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 " placeholder="Search..." type="text" name="search" />
                </section>
                <section className="flex flex-1/4 place-content-end ">
                    <nav>
                        <ul className="lg:flex items-center text-sm">
                            {menus && menus.map(({ display, url }, i) => {                           
                                return display === 'Profile' ?
                                    <li key={`${i}`} className="px-2 hover:text-sky-500 flex items-center">
                                        {`Welcome! ${""}`}&nbsp;&nbsp;
                                        <Link to={url}><img src="https://mdbootstrap.com//img/Photos/Square/1.jpg" alt={display} className="h-10 rounded-full" /></Link>
                                    </li>
                                    : <li key={`${i}`} className="px-2 text-slate-500 hover:text-sky-500 "><Link to={url}>{display}</Link></li>

                            })}
                        </ul>
                    </nav>
                </section>
            </section>
        </>
    </div>)
}

export default AppNavigation;