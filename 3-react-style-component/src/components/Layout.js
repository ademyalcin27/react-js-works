import React, { useContext} from 'react';
import { ThemeContext, ThemeProvider } from '../context/ThemeContext'

function Layout({ startingTheme, children}) {
    return (
    <ThemeProvider startingTheme={startingTheme}>
       <LayoutThemeProvider >
           {children}
       </LayoutThemeProvider>
    </ThemeProvider>
    )
}

function LayoutThemeProvider({ children}) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={theme === 'light' ? 'container-fluid light' : 'container-fluid dark'}>
            { children}
         </div>
    )
}
export default Layout;