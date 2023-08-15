import React, { useEffect, useState } from "react"
import { Outlet, useNavigate} from "react-router-dom"
import { HeaderWrapper, HeaderIconsWrapper, HeaderIcon, ArrowLeft,
    ArrowRight, FooterWrapper, FooterRightWrapper, FooterA } from "../pages/pagesStyles/HomeScreen.styles"
import copper_pro_logo from "../assets/copper_pro_logo.png"
import heart from "../assets/heart.svg"
import person from "../assets/person.svg"
import cart from "../assets/cart.svg"
import BG1 from "./../assets/BG1.png"
import BG2 from "./../assets/BG2.png"
import BG3 from "./../assets/BG3.png"

export function Layout() {
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const images = [BG1, BG2, BG3];
    const totalImages = images.length;
  
    const handleArrowClick = (direction: "left" | "right") => {
      if (direction === "left") {
        setCurrentImageIndex((currentImageIndex - 1 + totalImages) % totalImages);
      } else if (direction === "right") {
        setCurrentImageIndex((currentImageIndex + 1) % totalImages);
      }
    };

    return (
        <>
            <HeaderWrapper style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
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
                <ArrowLeft onClick={() => handleArrowClick("left")}>&lt;</ArrowLeft>
                <ArrowRight onClick={() => handleArrowClick("right")}>&gt;</ArrowRight>
            </HeaderWrapper>
            <Outlet/>
            <FooterWrapper>
                <div>
                    <img src={copper_pro_logo} style={{height: "30px"}}/>
                    <p>© 2021 “Copper Pro” Усі права захищені</p>
                    <FooterA>Політика конфіденційності</FooterA>
                </div>
                <FooterRightWrapper>
                    <div>
                        <h1>Навігація</h1>
                        <FooterA>Каталог</FooterA>
                        <FooterA>Новини</FooterA>
                        <FooterA>Доставка</FooterA>
                        <FooterA>Про нас</FooterA>
                        <FooterA>Контакти</FooterA>
                    </div>
                    <div>
                        <h1>Каталог</h1>
                        <FooterA>Для ефірної олії</FooterA>
                        <FooterA>Для гідролату</FooterA>
                        <FooterA>Мідний посуд</FooterA>
                        <FooterA>Аксесуари з міді</FooterA>
                        <FooterA>Індивідуальне замовлення</FooterA>
                        <FooterA>Знижки та пропозиції</FooterA>
                    </div>
                    <div>
                        <h1>Контакти</h1>
                        <FooterA>Бажана 8-Б, Киев, 02132 Украина</FooterA>
                        <FooterA>+38 (096) 990 67 56</FooterA>
                        <FooterA>a.alambik@gmail.com</FooterA>
                        <div>
                        <svg width="30px" height="30px" fill="#ffffff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.919 24.94c-2.548 0-4.921-.747-6.919-2.032a9.049 9.049 0 0 0 6.681-1.867 4.512 4.512 0 0 1-4.215-3.137c.276.054.559.082.848.082.412 0 .812-.056 1.193-.156a4.519 4.519 0 0 1-3.622-4.425v-.059a4.478 4.478 0 0 0 2.042.564 4.507 4.507 0 0 1-2.008-3.758c0-.824.225-1.602.612-2.268a12.811 12.811 0 0 0 9.303 4.715 4.517 4.517 0 0 1 7.692-4.115 9.107 9.107 0 0 0 2.866-1.094 4.542 4.542 0 0 1-1.983 2.498 9.08 9.08 0 0 0 2.592-.71 9.283 9.283 0 0 1-2.252 2.337c.008.193.014.388.014.583-.001 5.962-4.542 12.843-12.844 12.842"></path></g></svg>
                        <svg width="30px" height="30px" fill="#ffffff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path></g></svg>
                        <svg width="25px" height="25px" viewBox="0 0 24 24" id="meteor-icon-kit__solid-instagram" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M11.9962 0.0078125C8.73824 0.0078125 8.32971 0.021622 7.05019 0.080003C5.77333 0.138241 4.90129 0.341051 4.13824 0.637622C3.34938 0.944146 2.68038 1.35434 2.01343 2.02124C1.34652 2.68819 0.936333 3.35719 0.629809 4.14605C0.333238 4.9091 0.130429 5.78115 0.0721905 7.058C0.0138095 8.33753 0 8.74605 0 12.0041C0 15.262 0.0138095 15.6705 0.0721905 16.9501C0.130429 18.2269 0.333238 19.099 0.629809 19.862C0.936333 20.6509 1.34652 21.3199 2.01343 21.9868C2.68038 22.6537 3.34938 23.0639 4.13824 23.3705C4.90129 23.667 5.77333 23.8698 7.05019 23.9281C8.32971 23.9864 8.73824 24.0002 11.9962 24.0002C15.2542 24.0002 15.6627 23.9864 16.9422 23.9281C18.2191 23.8698 19.0911 23.667 19.8542 23.3705C20.643 23.0639 21.312 22.6537 21.979 21.9868C22.6459 21.3199 23.0561 20.6509 23.3627 19.862C23.6592 19.099 23.862 18.2269 23.9202 16.9501C23.9786 15.6705 23.9924 15.262 23.9924 12.0041C23.9924 8.74605 23.9786 8.33753 23.9202 7.058C23.862 5.78115 23.6592 4.9091 23.3627 4.14605C23.0561 3.35719 22.6459 2.68819 21.979 2.02124C21.312 1.35434 20.643 0.944146 19.8542 0.637622C19.0911 0.341051 18.2191 0.138241 16.9422 0.080003C15.6627 0.021622 15.2542 0.0078125 11.9962 0.0078125ZM7.99748 12.0041C7.99748 14.2125 9.78776 16.0028 11.9962 16.0028C14.2047 16.0028 15.995 14.2125 15.995 12.0041C15.995 9.79557 14.2047 8.00529 11.9962 8.00529C9.78776 8.00529 7.99748 9.79557 7.99748 12.0041ZM5.836 12.0041C5.836 8.60181 8.594 5.84381 11.9962 5.84381C15.3984 5.84381 18.1564 8.60181 18.1564 12.0041C18.1564 15.4062 15.3984 18.1642 11.9962 18.1642C8.594 18.1642 5.836 15.4062 5.836 12.0041ZM18.3998 7.03996C19.1949 7.03996 19.8394 6.39548 19.8394 5.60043C19.8394 4.80538 19.1949 4.16086 18.3998 4.16086C17.6048 4.16086 16.9603 4.80538 16.9603 5.60043C16.9603 6.39548 17.6048 7.03996 18.3998 7.03996Z" fill="#ffffff"></path></g></svg>
                        </div>
                    </div>
                </FooterRightWrapper>
            </FooterWrapper>
        </>
    );
}


export default Layout;
