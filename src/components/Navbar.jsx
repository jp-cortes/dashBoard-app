import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown, mdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";
import { Chat, Cart, Notifications, UserProfile } from "./index";

import avatar from "../data/avatar.jpg";

const NavbarButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="buttom"
        onClick={() => customFunc()}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-4 w-4 right-2 top-2"
        >
          {icon}
        </span>
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <header className="flex justify-between p-2 md:mx-6 relative">
      <nav className="">
        <NavbarButton
          title="Menu"
          customFunc={() => setActiveMenu((prevState) => !prevState)}
          color={currentColor}
          icon={<AiOutlineMenu />}
        />
      </nav>

      <section className="flex">
        <NavbarButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />

        <NavbarButton
          title="Chat"
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />

        <NavbarButton
          title="Notifications"
          customFunc={() => handleClick("notifications")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />

        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img className="rounded-full w-8 h-8" src={avatar} />
            <span className="text-gray-400 text-14">Hi, </span>{" "}
            <span className="text-gray-400 font-bold ml-1 text-14">
              Michael
            </span>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notifications && <Notifications />}
        {isClicked.userProfile && <UserProfile />}
      </section>
    </header>
  );
};
export { Navbar };
