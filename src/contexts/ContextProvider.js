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
    const [currentColor, setCurrentColor] = useState('#03C9D7');//
    const [currentMode, setCurrentMode] = useState('Light');//related to screen size
    const [themeSettings, setThemeSettings] = useState(false)

    const setMode = (e) => {
        setCurrentMode(e.target.value);

        localStorage.setItem('themeMode', e.target.value);

        setThemeSettings(false)
    }
    const setColor = (color) => {
        setCurrentColor(color);

        localStorage.setItem('colorMode', color);

        setThemeSettings(false)
    }

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
        currentColor, 
        currentMode, 
        themeSettings, setThemeSettings,
        setColor,
        setMode
    }}
    >
        {children}
    </StateContext.Provider>
     ); 
    
}
export const useStateContext = () => useContext(StateContext);