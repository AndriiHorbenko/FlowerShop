import React, { useEffect } from "react";
import { Outlet, useNavigate} from "react-router-dom";

export function Layout() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/home");
    }, [navigate]);
    return (
        <>
            <header>Header</header>
            <Outlet/>
            <footer>Footer</footer>
        </>
    );
}


export default Layout;
