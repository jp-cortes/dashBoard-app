import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";
import { links } from '../data/dummy';


const Sidebar = () => {
 const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

 //this function will close  the side bar if the screen width is more than 900px
const handleCloseSideBar = () => {
    if(activeMenu && screenSize <= 900) {
         setActiveMenu(false);
         console.log('shadow')
    }
}

 const activeLink = 'w-60 flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
 const normalLink = 'w-60 flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray-700  dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
    return (
        // md:overflow-hidden overflow-auto md:hover:overflow-auto
      
        <aside className="ml-3 h-auto pb-10 pt-5">
            {activeMenu && (<>
                <div className="flex justify-between items-center">
                    <Link to="/" onClick={handleCloseSideBar}
                    className="items-center gap-3 ml-3  mt-1 flex text-xl font-extrabold justify-between
                    tracking-tight dark:text-white"
                    >
                        <SiShopware/><span>Shoppy</span>
                        <TooltipComponent content="Menu" position="BottomCenter">
                            <button className="text-xl rounded-full p-3 hover:bg-light-gray mt-1 ml-20 space-x-6 block md:hidden" >
                                <MdOutlineCancel/>
                            </button>
                        </TooltipComponent>
                    </Link>

                </div>
                <div>
                    {links.map((item) => (
                        <div key={item.title}>

                            <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}
                            </p>
                            {item.links.map((link) => (
                                <NavLink
                                to={`/${link.name}`}
                                key={link.name}
                                onClick={handleCloseSideBar}

                                style={({ isActive }) => ({
                                    backgroundColor: isActive ? currentColor : ''
                                })}

                                className={({ isActive }) =>
                                (isActive ? activeLink : normalLink) }
                                >
                                   
                                    
                                    {link.icon}
                                    
                                    <span className="capitalize">
                                        {link.name}
                                    </span>

                                </NavLink>
                            ))}
                        </div>
                    ))}
                </div>
            </>)}
        </aside>
        
    );
}
export { Sidebar };