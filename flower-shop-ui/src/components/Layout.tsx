import React, { useEffect } from "react";
import { Outlet, useNavigate} from "react-router-dom";

export function Layout() {
    const navigate = useNavigate();
    // let location = useLocation();
    useEffect(() => {
        navigate("/home");
    }, []);
    return (
        <Outlet/>
    );
}


export default Layout;
