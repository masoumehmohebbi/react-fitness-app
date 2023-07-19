/* eslint-disable react/prop-types */
import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Layout = ({ children }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
    )
    return ( 
        <>
        <NavBar theme={theme} setTheme={setTheme}/>
        {children}
        <Footer/>
        </>
     );
}
 
export default Layout;