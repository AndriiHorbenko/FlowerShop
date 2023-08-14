import React, { useEffect } from "react";
import { Outlet, useNavigate} from "react-router-dom";
import { HeaderWrapper, HeaderIconsWrapper, HeaderIcon } from "../pages/pagesStyles/HomeScreen.styles";
import copper_pro_logo from "../assets/copper_pro_logo.png"
import heart from "../assets/heart.svg"
import person from "..//assets/person.svg"
import cart from "..//assets/cart.svg"

export function Layout() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/home");
    }, [navigate]);
    return (
        <>
            <HeaderWrapper>
                <img src={copper_pro_logo} style={{height: "30px"}}/>
                <div>Каталог</div>
                <div>Новини</div>
                <div>Доставка</div>
                <div>Про нас</div>
                <div>Контакти</div>
                <HeaderIconsWrapper>
                    <HeaderIcon>
                        <img src={heart}/>
                    </HeaderIcon>
                    <HeaderIcon>
                        <img src={person}/>
                    </HeaderIcon>
                    <HeaderIcon>
                        <img src={cart}/>
                    </HeaderIcon>
                </HeaderIconsWrapper>
            </HeaderWrapper>
            <Outlet/>
            <footer>Footer</footer>
        </>
    );
}


export default Layout;
