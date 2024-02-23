import {createContext, useState, useEffect} from "react";

const NavigationContext = createContext();

const NavigationProvider = ({children}) => {
    //Set currentPath to whatever url path user typed
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    //handles user click of forward/back buttons
    //stops refresh from happening if used from urls moved to using pushState
    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler);
        }
    }, [])

    const navigate = (to) => {
        window.history.pushState({},'',to);
        setCurrentPath(to);
    }

    return ( <NavigationContext.Provider value={{currentPath,navigate}}>

        {children}
    </NavigationContext.Provider>
    );
}

export {NavigationProvider};
export default NavigationContext;