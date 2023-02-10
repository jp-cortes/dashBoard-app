import React, { createContext, useContext,  useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notifications: false,
};

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);//related to sideBar
    const [isClicked, setIsClicked] = useState(initialState);//related to navbar
    const [screenSize, setScreenSize] = useState(undefined);//related to screen size
    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true });
    }
    return (
    <StateContext.Provider
    value={{ 
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize, 
        setScreenSize,
    }}
    >
        {children}
    </StateContext.Provider>
     ); 
    
}
export const useStateContext = () => useContext(StateContext);