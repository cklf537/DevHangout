import { Outlet } from "react-router-dom"
import Header from "../components/header/header.component"
import LeftNavigation from "../components/navigation/leftnavigation.component"

const DefaultRoute = () => {
    return <>
        <Header />
        <div className="flex flex-row gap-4 mt-2.5">
            <section className="left-pannel w-60 bg-white ">
                <LeftNavigation />
            </section>
            <section className="right-pannel flex-auto p-4 rounded-md ">
                <Outlet />
            </section>
        </div>
    </>

}

export default DefaultRoute;